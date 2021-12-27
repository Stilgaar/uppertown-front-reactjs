import "./App.css";
import "./App.scss";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AdminPage from "./Components/AdminPage/AdminPage";
import AllAnnounces from "./Components/AllAnnounces/AllAnnounces";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import UserPage from "./Components/UserPage/UserPage";
import AnnounceDetail from "./Components/AnnounceDetail/AnnounceDetail";
import Error from "./Components/Error/Error";
//temporaire :
import AnnounceDetailAdmin from "./Components/AnnounceManager/AnnounceDetailAdmin";
import useURL from "./Hooks/useURL";
import useSubmit from "./Hooks/useSubmit";
import FormContext from "./Context/FormContext";
import useToken from "./Hooks/useToken";

function App() {
  //  const [user, setUser] = useState({});
  const [url] = useURL();
  const [, , , , , , , , FormContextValue] = useSubmit();
  const [user, isLog, hardRefresh] = useToken(`${url}/api/users/token`)

  useEffect(() => {
    hardRefresh();
  }, []);

  return (
    <div className="app">
      <FormContext.Provider value={FormContextValue}>
        <Router>
          <div className="main">
            <NavBar
              isLog={isLog}
              user={user} />
            <Switch>
              <Route exact path="/">
                <Home
                  hardRefresh={hardRefresh}
                />
              </Route>
              <Route path="/announces">
                {isLog ? <AllAnnounces /> : <Error />}
              </Route>
              <Route path="/admin">{isLog ? <AdminPage /> : <Error />}</Route>
              <Route path="/userpage">
                {isLog ? (
                  <UserPage user={user} hardRefresh={hardRefresh} />
                ) : (
                  <Error />
                )}
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
      </FormContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
