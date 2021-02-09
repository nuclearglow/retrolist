import { route } from 'preact-router'
import { useEffect } from 'preact/hooks'
import { connect } from 'unistore/preact'
import Item from '../../components/item/item'
import { actions } from '../../store/store'
import style from './list.scss'

const List = connect(
    ['list', 'hydrated'],
    actions
)(({ list, hydrated, getList }) => {
    useEffect(() => {
        // wait for store hydration
        if (hydrated) {
            if (!list.id) {
                // no id? we need to create a new list
                route('create', true)
            } else if (list.id && !list.items) {
                // if we have an id but no items yet, we need to load from the server
                console.log('Getting list')
                getList()
            }
        }
    }, [list, hydrated, getList])

    return (
        <section className={`full ${style.list}`}>
            {list?.items?.length === 0 && <h3>Ready to go! What do you need?</h3>}
            {list?.items?.length > 0 && <h3>I need {list.items.length} things:</h3>}
            {/* <pre>{JSON.stringify(list, null, '\t')}</pre> */}
            <div class={style.items}>
                {list?.items?.map((item) => {
                    return <Item key={item.id} item={item} />
                })}
            </div>
        </section>
    )
})

export default List
