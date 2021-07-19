import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from "react-router-dom";
import AddProduct from "./Screens/AddProduct";
import ViewProduct from "./Screens/ViewProduct";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path={"/addProduct"} component={AddProduct} />
      <Route exact path={"/viewProduct"} component={ViewProduct} />
      <Redirect to="/addProduct" />
    </Switch>
  );
};

export default App;
