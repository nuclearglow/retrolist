import style from './item.scss'

const Item = (props) => {
    const { item } = props

    return (
        <div class={`${style.item} terminal-alert terminal-alert-primary`}>
            {item.amount > 1 && <span class={style.amount}>{`${item.amount}x `}</span>}
            {item.title}
        </div>
    )
}

export default Item
