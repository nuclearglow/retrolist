import style from './item.scss'

const Item = (props) => {
    const { item } = props

    return <div class={`${style.item} terminal-alert terminal-alert-primary`}>{item.title}</div>
}

export default Item
