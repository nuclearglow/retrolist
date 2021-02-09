import { useState } from 'preact/hooks'
import { connect } from 'unistore/preact'
import upgradeItem from '../../assets/icons/upgrade.svg'
import { actions } from '../../store/store'
import style from './footer.scss'

const Footer = connect(
    [],
    actions
)(({ addItem }) => {
    // the current item
    const [item, setItem] = useState('')
    const [amount, setAmount] = useState(1)

    // save to backend / state, clear here
    const save = () => {
        addItem(item, amount)
        setItem('')
        setAmount(1)
    }

    const handleChange = (e) => {
        if (e.target.value.endsWith('+')) {
            setAmount(amount + 1)
        } else if (e.target.value.endsWith('-')) {
            setAmount(amount - 1)
        } else {
            setItem(e.target.value)
        }
        e.preventDefault()
    }

    // keyboard handler for speedy mobile keyboard entries
    const handleKeyEvent = (e) => {
        if (e.key === '+') {
            // + ups the amount, but will not go into the item title
            setAmount(amount + 1)
        } else if (e.key === '-' && amount > 1) {
            // - downs the amount, but will not go into the item title
            setAmount(amount - 1)
        } else if (e.key === 'Enter' && e.target.checkValidity()) {
            // on enter, if the input field is valid, save (checks minLength / maxLength)
            save()
        }
        e.preventDefault()
    }

    return (
        <footer class={style.footer}>
            <div class={style.item}>
                <input
                    id="add"
                    name="add"
                    type="text"
                    minlength="1"
                    required="true"
                    placeholder="I need"
                    value={item}
                    onchange={handleChange}
                    onKeyPress={handleKeyEvent}
                />
            </div>

            <div class={style.amount}>
                <button class="btn btn-primary btn-ghost" onclick={() => setAmount(amount + 1)}>
                    +
                </button>
                <span className={amount > 1 ? style.more : ''}>{amount}x</span>
                <button class="btn btn-primary btn-ghost" onclick={() => setAmount(amount - 1)}>
                    -
                </button>
            </div>

            <div class={style.submit}>
                <button class="btn btn-default btn-ghost" onclick={save}>
                    <img src={upgradeItem} alt="Add item" />
                </button>
            </div>
        </footer>
    )
})

export default Footer
