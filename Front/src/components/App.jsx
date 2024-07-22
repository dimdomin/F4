
import {Route , Routes} from "react-router-dom";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";

import '../components/App.css'
import Dishes from "../components/Dishes.jsx";
import Recipe from "../components/Recipe.jsx";


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