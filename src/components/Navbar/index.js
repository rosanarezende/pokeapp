import React from "react";
// import { useDispatch } from "react-redux";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

// import { setInputSearch } from "../../redux/actions"

function Navbar() {
  // const dispatch = useDispatch();

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h3" component="h1">
          Poke App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
