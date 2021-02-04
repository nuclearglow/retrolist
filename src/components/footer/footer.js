import upgradeItem from '../../assets/icons/upgrade.svg'
import style from './footer.scss'

const Footer = () => (
    <footer class={style.footer}>
        <input id="add" name="add" type="text" required="" placeholder="Add item" />
        <button class="btn btn-default btn-ghost">
            <img src={upgradeItem} alt="Add Item" />
        </button>
    </footer>
)

export default Footer
