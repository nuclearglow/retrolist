import { useEffect } from 'preact/hooks'
import { connect } from 'unistore/preact'
import Item from '../../components/item/item'
import { actions } from '../../store/store'
import style from './list.scss'

const List = connect(
    ['list', 'stale'],
    actions
)(({ list, stale, getList }) => {
    useEffect(() => {
        if (stale) {
            getList()
        }
    }, [stale, getList])

    return (
        <section className={`full ${style.list}`}>
            {/* <pre>{JSON.stringify(list, null, '\t')}</pre> */}
            {list?.items?.map((item) => {
                return <Item key={item.id} item={item} />
            })}
            {list?.items?.length === 0 && <p>Ready to go! What do you need?</p>}
        </section>
    )
})

export default List
