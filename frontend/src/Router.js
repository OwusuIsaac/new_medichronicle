import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import HomePage from "./screens/HomePage";
import ProviderHomePage from "./screens/provider/ProviderHomePage";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>

      <Switch>
        {loggedIn === false && (
          <>
            <Route >
              <HomePage />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Navbar />
            <Route >
              <ProviderHomePage />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
