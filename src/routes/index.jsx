import { Route, Switch } from "react-router";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";

export default function Routes () {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart} />
        </Switch>
    )
}
