import { Route, Switch } from "react-router";
import { Home } from "../pages/Home";

export default function Routes () {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    )
}
