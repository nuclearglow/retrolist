import { route } from 'preact-router'
import createStore from 'unistore'
import devtools from 'unistore/devtools'

// initial state
export const initialState = {
    count: 0,
    list: {},
    // if stale, the backend should be polled by a component
    stale: true
}

// setup store
export const store =
    process.env.NODE_ENV === 'production' ? createStore(initialState) : devtools(createStore(initialState))

// store actions that can be directly used from connected components
export const actions = () => ({
    updateList: (state, title, subtitle) => {
        return {
            title: title ?? state.list?.title,
            subtitle: subtitle ?? state.list?.subtitle
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
            const currentState = store.getState()
            route('', true)
            return {
                stale: true,
                list: {
                    id: result.id,
                    ...currentState.list
                }
            }
        }
    },
    /**
     * Backend Actions
     */
    getList: async (state) => {
        const response = await fetch(`/api/list/${state.list?.id ?? 7}`)
        // TODO: handle error: https://dmitripavlutin.com/javascript-fetch-async-await/
        if (response.status === 404) {
            // no list available, navigate user to creation
            route('create')
            return { list: {} }
        }
        // ok, return the data
        return { list: await response.json(), stale: false }
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
        // TODO: handle error https://dmitripavlutin.com/javascript-fetch-async-await/
        if (response.ok) {
            // wait for the backend to save and add the id
            const result = await response.json()
            item.id = result.id
            // persist
            const currentState = store.getState()
            return {
                stale: true,
                list: {
                    items: [item, ...currentState.list.items],
                    id: currentState.list.id,
                    title: currentState.list.title,
                    subtitle: currentState.list.subtitle
                }
            }
        }
    }
})
