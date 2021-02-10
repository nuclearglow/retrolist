import style from './itemEdit.scss'

const ItemEdit = (props) => {
    const { amount, title } = props

    // trigger parent handler - updates props and triggers save on "Enter"
    const onChange = (amount, title, triggerSave) => {
        props.onChange(amount, title, triggerSave)
    }

    const handleChange = (e) => {
        if (e.target.value.endsWith('+')) {
            onChange(amount + 1, title, false)
        } else if (e.target.value.endsWith('-')) {
            onChange(amount - 1, title, false)
        } else {
            onChange(amount, e.target.value, false)
        }
        e.preventDefault()
    }

    // keyboard handler for speedy mobile keyboard entries
    const handleKeyEvent = (e) => {
        if (e.key === '+') {
            // + ups the amount, but will not go into the item title
            onChange(amount + 1, title, false)
            e.preventDefault()
        } else if (e.key === '-' && amount > 1) {
            // - downs the amount, but will not go into the item title
            onChange(amount - 1, title, false)
            e.preventDefault()
        } else if (e.key === 'Enter' && e.target.checkValidity()) {
            // on enter, if the input field is valid, save (checks minLength / maxLength)
            onChange(amount, title, true)
            e.preventDefault()
        }
    }

    return (
        <div class={style.amount}>
            <button class="btn btn-primary btn-ghost" onclick={() => onChange(amount + 1, title, false)}>
                +
            </button>

            <span className={amount > 1 ? style.more : ''}>{amount}x</span>

            <button class="btn btn-primary btn-ghost" onclick={() => onChange(amount - 1, title, false)}>
                -
            </button>

            <div class={style.item}>
                <input
                    id="edit"
                    name="edit"
                    type="text"
                    minlength="1"
                    required="true"
                    placeholder="I need..."
                    value={title}
                    onchange={handleChange}
                    onKeyPress={handleKeyEvent}
                />
            </div>
        </div>
    )
}
export default ItemEdit
