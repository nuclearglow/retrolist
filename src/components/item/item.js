import { useState } from 'preact/hooks'
import { Edit2, Save } from 'react-feather'
import { connect } from 'unistore/preact'
import { actions } from '../../store/store'
import ItemEdit from '../itemEdit/itemEdit'
import style from './item.scss'

const Item = connect(
    [],
    actions
)(({ editItem, item }) => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(item.title)
    const [amount, setAmount] = useState(item.amount)

    // save edited data to backend / state, clear edit mode
    const save = async () => {
        await editItem(item.id, title, amount)
        setEditMode(false)
    }

    // child component change handler
    const handleChange = (newAmount, newTitle, triggerSave) => {
        setAmount(Math.max(1, newAmount))
        setTitle(newTitle)
        if (triggerSave) {
            save()
        }
    }

    const readOnlyItem = (
        <div class={`${style.item} terminal-alert terminal-alert-primary`}>
            <div class={style.amount}>
                <span class={style.amount}>{`${item.amount}x `}</span>
            </div>
            <div class={style.title}>{item.title}</div>
            <div class={style.save}>
                <Edit2 onclick={() => setEditMode(true)} size="16" />
            </div>
        </div>
    )

    const editableItem = (
        <div class={`${style.item} terminal-alert terminal-alert-primary`}>
            <ItemEdit title={title} amount={amount} onChange={handleChange} />

            <div class={style.submit}>
                <Save onclick={save} />
            </div>
        </div>
    )

    return editMode ? editableItem : readOnlyItem
})

export default Item
