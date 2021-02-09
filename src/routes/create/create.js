import { route } from 'preact-router'
import { useEffect, useState } from 'preact/hooks'
import { connect } from 'unistore/preact'
import { actions } from '../../store/store'
import style from './create.scss'

const Create = connect(
    ['list'],
    actions
)(({ list, createList, updateList }) => {
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')

    useEffect(() => {
        if (list.id) {
            route('', true)
        }
    }, [list])

    useEffect(() => {
        updateList(title, subtitle)
    }, [title, subtitle])

    const save = (e) => {
        createList(title, subtitle)
        e.preventDefault()
    }

    return (
        <section className={`full ${style.list}`}>
            <form action="#" onsubmit={save}>
                <fieldset>
                    <legend>Create your Retrolist</legend>
                    <div class="form-group">
                        <label for="title">Title:</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            required="true"
                            autoFocus="true"
                            minlength="3"
                            maxlength="10"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="subtitle">Subtitle:</label>
                        <input
                            id="subtitle"
                            name="subtitle"
                            type="text"
                            required="true"
                            minlength="1"
                            maxlength="10"
                            placeholder="subtitle"
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-block" type="submit" role="button" name="submit" id="submit">
                            Save
                        </button>
                    </div>
                </fieldset>
            </form>
        </section>
    )
})

export default Create
