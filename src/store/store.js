import { route } from 'preact-router'
import createStore from 'unistore'
import devtools from 'unistore/devtools'

// initial state
export const initialState = {
    count: 0,
    list: {}
}

// setup store
export const store =
    process.env.NODE_ENV === 'production' ? createStore(initialState) : devtools(createStore(initialState))

// store actions that can be directly used from connected components
export const actions = () => ({
    /**
     * toggle the debug mode
     */
    up: (state) => {
        return { count: state.count + 1 }
    },
    down: (state) => {
        return { count: state.count - 1 }
    },
    createRetroList: async (state, title, subtitle) => {
        // TODO: wire
        const response = await fetch('/api/list/1', {
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
            route('/list')
            return {
                list: {
                    id: result.id,
                    title,
                    subtitle
                }
            }
        }
    },
    /**
     * Backend Actions
     */
    getRetroList: async () => {
        const response = await fetch('/api/list/1')
        // TODO: handle error: https://dmitripavlutin.com/javascript-fetch-async-await/
        if (response.status === 404) {
            // no list available, navigate user to creation
            route('/create')
            return { list: {} }
        }
        // ok, return the data
        return { list: await response.json() }
    }
})
