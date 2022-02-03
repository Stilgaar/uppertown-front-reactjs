// Styles
import "./App.css";
import './css/index.css'
import React, { useEffect } from "react";

// routeur dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Error404 from "./Components/Error/Error404";

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

          <Routes>
            <Route path="/" element={<Home hardRefresh={hardRefresh} />} />
            <Route path="/announces" element={user ? <AllAnnounces /> : <Error />} />
            <Route path="/admin" element={user ? <AdminPage /> : <Error />} />
            <Route path="/userpage" element={user ? <UserPage user={user} hardRefresh={hardRefresh} /> : <Error />} />
            <Route path="/announce-detail/:id" element={user ? <AnnounceDetail user={user} hardRefresh={hardRefresh} /> : <Error />} />
            <Route path="/user-detail/:id" element={user ? <UserDetail user={user} hardRefresh={hardRefresh} /> : <Error />} />
            <Route path="*" element={<Error404 />} />
          </Routes>

        </div>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
