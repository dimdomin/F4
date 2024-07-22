import {useParams} from "react-router-dom";
import {useEffect , useState} from "react";

import {URL_Recipe} from "../const/const.js";

import axios from "axios";
import styles from '../components/Recipe.css'

function Recipe() {
   const id = useParams().id
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        axios.get(`${URL_Recipe}${id}`).then(res => {
            setRecipe(res.data);
        })
    }, [])

    return (
        <div className={styles.recipe}>
            <h2 className={styles.title}>{recipe.title}</h2>
            <p>{recipe.recipe}</p>
        </div>
    )
}

export default Recipe;