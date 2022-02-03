// Styles
import "./App.css";
import './css/index.css'
import React, { useEffect } from "react";

// routeur dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages // composants
import Home from "./Components/Home/Home";
import AdminPage from "./Components/AdminPage/AdminPage";
import AllAnnounces from "./Components/AllAnnounces/AllAnnounces";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/NavBar/Navigation";
import UserPage from "./Components/UserPage/UserPage";
import AnnounceDetail from "./Components/AllAnnounces/AnnounceDetail/AnnounceDetail";
import UserDetail from "./Components/AdminPage/UserLine/UserDetail";
import Error from "./Components/Error/Error";

// hooks (& context)
import useToken from "./Hooks/useToken";

function App() {

  const { user, hardRefresh } = useToken()

  useEffect(() => { hardRefresh() }, [hardRefresh]);

  return (
    <div className="app">
      <Router>
        <div className="main">
          <Navigation
            user={user} />
          <Switch>
            <Route exact path="/">
              <Home
                hardRefresh={hardRefresh} />
            </Route>
            <Route path="/announces">
              {user ? <AllAnnounces /> : <Error />}
            </Route>
            <Route path="/admin">
              {user ? <AdminPage /> : <Error />}</Route>
            <Route path="/userpage">
              {user ? <UserPage user={user} hardRefresh={hardRefresh} /> : <Error />}
            </Route>
            <Route path="/announce-detail">
              {user ? <AnnounceDetail user={user} hardRefresh={hardRefresh} /> : <Error />}
            </Route>
            <Route path="/user-detail">
              {user ? <UserDetail user={user} hardRefresh={hardRefresh} /> : <Error />}
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
