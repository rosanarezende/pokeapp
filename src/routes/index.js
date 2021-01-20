import { BrowserRouter, Route, Switch } from "react-router-dom";
import Catalogo from "../pages/Catalogo";
import Pokebola from "../pages/Pokebola";

function Routes() {
    return (
        <BrowserRouter>

            <Switch>

                <Route
                    path="/"
                    component={Catalogo}
                    exact
                />

                <Route
                    path="/pokebola"
                    component={Pokebola}
                />

            </Switch>

        </BrowserRouter>
    )
}

export default Routes