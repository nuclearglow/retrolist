import { Link } from 'preact-router/match'
import style from './header.scss'

const Header = () => (
    <header class={style.header}>
        <Link activeClassName={style.active} href="/list">
            List
        </Link>
        <Link activeClassName={style.active} href="/profile">
            Profile
        </Link>
        <Link activeClassName={style.active} href="/settings">
            Settings
        </Link>
    </header>
)

export default Header
