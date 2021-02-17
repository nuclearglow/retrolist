import { useState } from 'preact/hooks'
import { Upload } from 'react-feather'
import { connect } from 'unistore/preact'
import { actions } from '../../store/store'
import ItemEdit from '../itemEdit/itemEdit'
import style from './footer.scss'

const Footer = connect(
    ['list'],
    actions
)(({ list, addItem }) => {
    // the current item
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(1)

    // save to backend / state, clear here
    const save = () => {
        addItem(title, amount)
        setTitle('')
        setAmount(1)
    }

    // child component change handler
    const handleChange = (newAmount, newTitle, triggerSave) => {
        setAmount(Math.max(1, newAmount))
        setTitle(newTitle)
        if (triggerSave) {
            save()
        }
    }

    if (list.id) {
        return (
            <footer class={style.footer}>
                <div class={style.item}>
                    <ItemEdit title={title} amount={amount} onChange={handleChange} />
                </div>

                <div class={style.submit}>
                    <Upload onclick={save} />
                </div>
            </footer>
        )
    }
})

export default Footer
