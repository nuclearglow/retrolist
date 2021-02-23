import { route } from 'preact-router'
import { useEffect, useState } from 'preact/hooks'
import { UserPlus } from 'react-feather'
import { connect } from 'unistore/preact'
import { actions } from '../../store/store'
import style from './register.scss'

const Register = connect(
    ['user'],
    actions
)(({ user, register }) => {
    const [nick, setNick] = useState('')
    const [email, setEmail] = useState('')

    // check registration state and route back if registered / loggedin
    useEffect(() => {
        if (user.registered && user.nick && user.email) {
            route('', true)
        }
        // TODO: verify creds here if already registered (login)
    }, [user])

    const save = (e) => {
        register(nick, email)
        e.preventDefault()
    }

    return (
        <section className={`full ${style.auth}`}>
            <form action="#" onsubmit={save}>
                <fieldset>
                    <legend>Welcome to Retrolist</legend>
                    <div class="form-group">
                        <label for="nick">Choose a nick:</label>
                        <input
                            id="nick"
                            name="nick"
                            type="text"
                            required="true"
                            autoFocus="true"
                            minlength="3"
                            maxlength="10"
                            placeholder="nick"
                            value={nick}
                            onchange={(e) => setNick(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">Your email:</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required="true"
                            autoFocus="true"
                            maxlength="255"
                            placeholder="email"
                            value={email}
                            onchange={(e) => setEmail(e.target.value)}
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
