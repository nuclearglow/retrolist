const Item = (props) => {
    const { item } = props

    return <div class="terminal-alert terminal-alert-primary">{item.title}</div>
}

export default Item
