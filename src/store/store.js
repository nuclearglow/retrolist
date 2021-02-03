import createStore from 'unistore'
import devtools from 'unistore/devtools'

// initial state
export const initialState = {
    count: 0,
    list: []
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
    /**
     * Backend Actions
     */
    getRetroList: async () => {
        const res = await fetch('/api/list/1')
        return { list: await res.json() }
    }
})
