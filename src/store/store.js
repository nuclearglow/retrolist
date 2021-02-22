import persistStore from 'unissist'
import localStorageAdapter from 'unissist/integrations/localStorageAdapter'
import createStore from 'unistore'
import devtools from 'unistore/devtools'
import { register } from '../webauthn/register'

// initial state
export const initialState = {
    username: '',
    count: 0,
    list: {},
    // if hydrated becomes true, a persisted store state has been re-hydrated
    hydrated: false,
    // persisted webauthn state
    webauthn: {
        registered: false
    }
}

// setup store
export const store =
    process.env.NODE_ENV === 'production' ? createStore(initialState) : devtools(createStore(initialState))

// persist store: https://github.com/DonnieWest/unissist
const adapter = localStorageAdapter()
// Default values except migration
let config = {
    version: 1,
    debounceTime: 100
    // called when version is updated. Accepts promises. Defaults to dropping the store
    // migration: (oldState, oldversion) => ({ /* new state */ }),
    // takes in the current state and returns the state to be persisted
    // map: state => ({ /* new persisted state shape */ })
    // takes in state that will be hydrated and returns the new state shape
    // hydration: state => ({ /* new state shape */ })
}
persistStore(store, adapter, config)

// TODO: handle fetch errors https://dmitripavlutin.com/javascript-fetch-async-await/

// store actions that can be directly used from connected components
export const actions = () => ({
    register: async (state, username) => {
        const registerUserData = await register(username)
        if (registerUserData) {
            return {
                username,
                webauthn: {
                    registered: true,
                    userId: registerUserData.userId,
                    id: registerUserData.id,
                    rawId: registerUserData.rawId
                }
            }
        }
        console.log('Registration failed')
        return {
            webauthn: {
                registered: false
            }
        }
    },
    login: () => {
        console.log('TODO: implement login')
    },
    updateList: (state, title, subtitle) => {
        // only update the title and subtitle if we do not have an id from the server yet
        if (!state.list.id) {
            return {
                list: {
                    title: title ?? state.list?.title,
                    subtitle: subtitle ?? state.list?.subtitle
                }
            }
        }
    },
    createList: async (state, title, subtitle) => {
        const response = await fetch('/api/list', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, subtitle })
        })
        // TODO: handle error https://dmitripavlutin.com/javascript-fetch-async-await/
        if (response.ok) {
            const result = await response.json()
            return {
                list: {
                    id: result.id
                }
            }
        }
    },
    /**
     * Backend Actions
     */
    getList: async (state) => {
        const response = await fetch(`/api/list/${state.list?.id}`)

        if (response.status === 404) {
            // no list available, navigate user to creation
            return { list: {} }
        }
        // ok, return the data and stale mode
        return { list: await response.json() }
    },
    addItem: async (state, title, amount) => {
        const item = { list_id: state.list.id, title, amount: amount ?? 1 }

        const response = await fetch('/api/item', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })

        if (response.ok) {
            // wait for the backend to save and add the id
            const result = await response.json()
            item.id = result.id
            // persist
            const currentState = store.getState()
            return {
                list: {
                    items: [item, ...currentState.list.items],
                    id: currentState.list.id,
                    title: currentState.list.title,
                    subtitle: currentState.list.subtitle
                }
            }
        }
    },
    editItem: async (state, id, title, amount) => {
        if (id) {
            const updatedItem = {
                title,
                amount
            }
            const response = await fetch(`/api/item/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedItem)
            })

            if (response.ok) {
                // wait for the backend to save and add the id
                const result = await response.json()
                // persist change
                const currentState = store.getState()
                const newItems = currentState.list.items.map((item) => {
                    return item.id === id
                        ? {
                              id: result.id,
                              list_id: item.list_id,
                              ...updatedItem
                          }
                        : item
                })
                return {
                    list: {
                        items: newItems,
                        id: currentState.list.id,
                        title: currentState.list.title,
                        subtitle: currentState.list.subtitle
                    }
                }
            }
        }
    }
})
