// Styles
import "./App.css";
import "./App.scss";
import './css/index.css'
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import AdminPage from "./Components/AdminPage/AdminPage";
import AllAnnounces from "./Components/AllAnnounces/AllAnnounces";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/NavBar/Navigation";
import UserPage from "./Components/UserPage/UserPage";
import AnnounceDetail from "./Components/AllAnnounces/AnnounceDetail/AnnounceDetail";
import UserDetail from "./Components/AdminPage/UserLine/UserDetail";
import Error from "./Components/Error/Error";

//temporaire :
import axios from "axios";
import useURL from "./Hooks/useURL";
import useSubmit from "./Hooks/useSubmit";
import FormContext from "./Context/FormContext";
import URLContext from "./Context/URLcontext";

function App() {
  const [user, setUser] = useState({});
  const [URLContextValue] = useURL();
  const [FormContextValue] = useSubmit();

  let isLog = user !== null;

  function hardRefresh() {
    let localToken = localStorage.getItem("@updownstreet-token");
    if (localToken === null) {
      return setUser(null);
    }
    axios
      .get(`${URLContextValue.url}/api/users/token`, {
        headers: { authorization: `Bearer ${localToken}` },
      })
      .then((res) => {
        if (res.data === "token expire") {
          localStorage.removeItem("@updownstreet-token");
          localStorage.removeItem("@uppertown-url");
          document.location.replace("/");
        } else {
          setUser(res.data);
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    hardRefresh();
  }, []);

  return (
    <div className="app">
      <URLContext.Provider value={URLContextValue}>
        <FormContext.Provider value={FormContextValue} >
          <Router>
            <div className="main">
              <Navigation
                isLog={isLog}
                user={user} />
              <Switch>
                <Route exact path="/">
                  <Home
                    hardRefresh={hardRefresh} />
                </Route>
                <Route path="/announces">
                  {isLog ? <AllAnnounces /> : <Error />}
                </Route>
                <Route path="/admin">{isLog ? <AdminPage /> : <Error />}</Route>
                <Route path="/userpage">
                  {isLog ? <UserPage user={user} hardRefresh={hardRefresh} /> : <Error />}
                </Route>
                <Route path="/announce-detail">
                  {isLog ? <AnnounceDetail user={user} hardRefresh={hardRefresh} /> : <Error />}
                </Route>
                <Route path="/user-detail">
                  {isLog ? <UserDetail user={user} hardRefresh={hardRefresh} /> : <Error />}
                </Route>
              </Switch>
            </div>
          </Router>
        </FormContext.Provider>
      </URLContext.Provider >
      <Footer />
    </div>

  );
}

export default App;
