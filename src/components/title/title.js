import { connect } from 'unistore/preact'
import style from './title.scss'

const Title = connect(['list'])(({ list }) => {
    if (list) {
        return (
            <div class={style.headline}>
                <div class={style.wrapper}>
                    <div class={style.title} data-title={list.title}>
                        {list.title}
                        <div class={style.subtitle}>{list.subtitle}</div>
                    </div>
                    <div class={style.scanline} />
                </div>
            </div>
        )
    }
})

export default Title
