import style from './title.scss'

const Title = () => (
    <div class={style.title}>
        <div class={style.wrapper}>
            <div class={style.headline}>SHOPPING</div>
            <div class={style.subtitle}>Manager</div>
            <div class={style.scanline} />
        </div>
    </div>
)

export default Title
