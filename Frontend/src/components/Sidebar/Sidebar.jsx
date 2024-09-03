import {useEffect , useState} from "react";
import axios from "axios";
import {URL_Categories} from "../../const/const.js";

import styles from './Sidebar.module.css'
import {NavLink} from "react-router-dom";


function Sidebar() {

    const [categories, setCategories] = useState([]);


    useEffect(()=>{
        axios.get(URL_Categories).then(res =>{
            setCategories(res.data);
        })
    },[])

    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>Категории блюд</div>
            <nav>
                <ul className={styles.menu}>
                    {categories.map(({id, name}) =>(
                        <li key={id}>
                            <NavLink
                                className={({isActive}) =>
                                    `${styles.link} ${isActive ? styles.active : ''}`
                                }
                                to={`/category/${id}`}>
                                {name}
                            </NavLink>
                        </li>
                    )) }

                </ul>
            </nav>
        </section>
    )
}

export default Sidebar;