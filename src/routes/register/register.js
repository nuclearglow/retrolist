import { route } from 'preact-router'
import { useEffect, useState } from 'preact/hooks'
import { UserPlus } from 'react-feather'
import { connect } from 'unistore/preact'
import { actions } from '../../store/store'
import style from './register.scss'

const Register = connect(
    ['webauthn'],
    actions
)(({ webauthn, register }) => {
    const [username, setUsername] = useState('')
    // check registration state and route back if registered / loggedin
    useEffect(() => {
        if (webauthn.registered && webauthn.id) {
            route('', true)
        }
        // TODO: verify creds here if already registered (login)
    }, [webauthn])

    const save = (e) => {
        register(username)
        e.preventDefault()
    }

    return (
        <section className={`full ${style.auth}`}>
            <form action="#" onsubmit={save}>
                <fieldset>
                    <legend>Welcome to Retrolist</legend>
                    <div class="form-group">
                        <label for="username">Choose a nickname:</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required="true"
                            autoFocus="true"
                            minlength="3"
                            maxlength="10"
                            placeholder="nickname"
                            value={username}
                            onchange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-ghost btn-block" type="submit" role="button" name="submit" id="submit">
                            <UserPlus />
                        </button>
                    </div>
                </fieldset>
            </form>
        </section>
    )
})

export default Register
