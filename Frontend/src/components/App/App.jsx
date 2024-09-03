
import {Route , Routes} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";

import '../../App.css'
import Dishes from "../Dishes/Dishes.jsx";
import Recipe from "../Recipe/Recipe.jsx";


function App() {


  return (
    <>
        <Header />
        <div className={"container"}>
            <div className={"side"}>
                <Sidebar />
            </div>


            <Routes>
                <Route exact path={'/category/:category'} element={<Dishes />} />
                <Route exact path={'/recipe/:id'} element={<Recipe />} />
            </Routes>


        </div>




    </>
  )
}

export default App
