import './App.css';
import './App.scss';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Components/Home/Home';
import AdminPage from './Components/AdminPage/AdminPage';
import AllAnnounces from './Components/AllAnnounces/AllAnnounces';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import UserPage from './Components/UserPage/UserPage';
import AnnounceDetail from './Components/AnnounceDetail/AnnounceDetail';
import Error from './Components/Error/Error';
//temporaire :
import AnnounceDetailAdmin from './Components/AnnounceManager/AnnounceDetailAdmin';



const axios = require('axios');

function App() {

  const [formState, setFormState] = useState("none");
  const [user, setUser] = useState({});
  let url = `https://uppertown-back.osc-fr1.scalingo.io` || `http://localhost:1337`

  let isLog = user !== null;

  function hardRefresh() {
    let localToken = localStorage.getItem("@updownstreet-token");
    if (localToken === null) {
      return setUser(null)
    }
    axios.get(`${url}/api/users/token`, { headers: { authorization: `Bearer ${localToken}` } })
      .then((res) => {
        if (res.data == 'token expire') {
          localStorage.removeItem("@updownstreet-token");
          document.location.replace('/');
        }
        else {
          setUser(res.data)
        }
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    hardRefresh();
  }, [])

  return (
    <div className="app">

      <Router>
        <div className="main">
          <NavBar formState={formState} setFormState={setFormState} isLog={isLog} user={user} />
          <Switch>
            <Route exact path="/" >
              <Home formState={formState} setFormState={setFormState} hardRefresh={hardRefresh} />
            </Route>

            <Route path="/announces" >
              {isLog ? <AllAnnounces /> : <Error />}
            </Route>

            <Route path="/admin" >
              {isLog ? <AdminPage /> : <Error />}
            </Route>

            <Route path="/userpage" >
              {isLog ? <UserPage user={user} hardRefresh={hardRefresh} /> : <Error />}
            </Route>

            <Route path="/announce-detail-admin">
              {isLog ? <AnnounceDetailAdmin /> : <Error />}
            </Route>

            <Route path="/announce-detail">
              {isLog ? <AnnounceDetail /> : <Error />}
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
