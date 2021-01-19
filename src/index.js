import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Button } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <div>

      <Button variant="outlined" color="primary">
        Primary
      </Button>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
