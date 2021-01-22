// import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

// import { setInputSearch } from "../../redux/actions"

function Navbar() {
  // const dispatch = useDispatch();
  const history = useHistory()
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h3" component="h1">
          Poke App
        </Typography>
        <div>
        <Button onClick={() => history.push("/")}> Todos Pokemons </Button>
        <Button onClick={() => history.push("/mypokemons")}> Meus Pokemons </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
