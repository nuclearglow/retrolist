import { route } from 'preact-router'
import { useEffect } from 'preact/hooks'
import { connect } from 'unistore/preact'
import Item from '../../components/item/item'
import { actions } from '../../store/store'
import style from './list.scss'

const List = connect(
    ['user', 'list', 'hydrated', 'synchronized'],
    actions
)(({ user, list, hydrated, synchronized, getList, login }) => {
    useEffect(() => {
        // wait for store hydration
        if (hydrated) {
            // no registration state in store -> register first
            if (!user.registered) {
                route('register', true)
            } else if (!user.authenticated) {
                // no authentication state in store -> login first
                console.log('logging in')
                login()
            } else if (!list.id) {
                // no list id? we need to create a new list
                route('create', true)
            } else if (list.id && !synchronized) {
                // we have a list but no synchronization, so load first
                getList()
            }
        }
    }, [user, list, hydrated, getList])

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
