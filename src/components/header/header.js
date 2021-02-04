import { Link } from 'preact-router/match'
import listIcon from '../../assets/icons/checklist.svg'
import settingsIcon from '../../assets/icons/cog.svg'
import style from './header.scss'

const Header = () => (
    <header class={style.header}>
        <Link activeClassName={style.active} href="/list">
            <img src={listIcon} alt="List" />
            RetroList
        </Link>
        <Link activeClassName={style.active} href="/profile">
            Profile
        </Link>
        <Link activeClassName={style.active} href="/settings">
            <img src={settingsIcon} alt="Settings" />
        </Link>
    </header>
)

export default Header
