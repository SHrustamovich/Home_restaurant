import { Route ,Switch } from "react-router-dom";
import "../MainPage/MainPage.css"
import Categories from "../categorys/Categories";
import MenuBar from "../../MenuBar/MenuBar";
function MainPage () {
    return(
        <div>
            <div><MenuBar/></div>
            <ul className="list">
                <li className="list__item">
                   <Switch>
                        <Route path="/" exact><Categories/></Route>
                   </Switch>
                </li>
                <li className="list__item">
                   <Switch>
                        <Route path="/about">About</Route>
                   </Switch>
                </li>
                <li className="list__item">
                <Switch>
                        <Route path="/cantact">Cantact</Route>
                   </Switch>
                </li>
            </ul>
        </div>
    )
}
export default MainPage;