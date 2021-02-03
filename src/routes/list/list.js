import { useEffect } from 'preact/hooks'
import { connect } from 'unistore/preact'
import { actions } from '../../store/store'
import style from './list.scss'

const List = connect(
    ['list'],
    actions
)(({ list, getRetroList }) => {
    useEffect(() => {
        getRetroList()
    }, [])

    return (
        <section className={`full ${style.list}`}>
            <h1>List</h1>
            <pre>{JSON.stringify(list, null, '\t')}</pre>
        </section>
    )
})

export default List
