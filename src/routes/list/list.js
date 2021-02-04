import { useEffect } from 'preact/hooks'
import { connect } from 'unistore/preact'
import Item from '../../components/item/item'
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
            {/* <pre>{JSON.stringify(list, null, '\t')}</pre> */}
            {list.items?.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </section>
    )
})

export default List
