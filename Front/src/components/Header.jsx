import styles from "../components/Header.css"
import {Link} from "react-router-dom";

function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                <Link to={'/'}>Меню</Link>
            </div>
            <div className={styles.info}>Рецепты блюд стран и народов мира</div>

        </div>
    )
}

export default Header;