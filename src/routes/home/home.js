import { useEffect } from 'preact/hooks'
import { connect } from 'unistore/preact'
import { actions } from '../../store/store'
import style from './home.scss'

const Home = connect(
    ['count', 'list'],
    actions
)(({ count, list, up, down, getRetroList }) => {
    useEffect(() => {
        getRetroList()
    }, [])

    return (
        <div class={style.home}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
            <h2>Store Test</h2>
            <p>Count: {count}</p>
            <button onclick={up}>Up</button>
            <button onclick={down}>Down</button>
            <h2>List Test</h2>
            <pre>{JSON.stringify(list, null, '\t')}</pre>
        </div>
    )
})

export default Home
