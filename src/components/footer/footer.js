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
    // save to backend / state, clear here
    const save = () => {
        addItem(item)
        setItem('')
    }
    // on enter, if the input field is valid, save
    const handleKeyEvent = (e) => {
        if (e.key === 'Enter' && e.target.checkValidity()) {
            save()
        }
    }

    return (
        <footer class={style.footer}>
            <input
                id="add"
                name="add"
                type="text"
                minlength="1"
                required="true"
                placeholder="I need"
                value={item}
                onchange={(e) => setItem(e.target.value)}
                onKeyDown={handleKeyEvent}
            />
            <button class="btn btn-default btn-ghost" onclick={save}>
                <img src={upgradeItem} alt="Add item" />
            </button>
        </footer>
    )
})

export default Footer
