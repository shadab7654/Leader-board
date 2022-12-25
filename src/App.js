import React from "react";
import Topbar from "./Component/Topbar/Topbar";
import Sidebar from "./Component/sidebar/Sidebar";
import "./app.css"
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Switch from 'react-router-transition-switch'
import UserList from "./Pages/UserList/UserList";

// import FeatureInfo from "./FeatureInfo/FeatureInfo";

function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />

          <Routes>
            <Route  path="/" element={ <Home />}>
            </Route>
          </Routes>

          <Routes>
            <Route path="/Users" element={ <UserList />}>
            </Route>
          </Routes>

          {/* <FeatureInfo /> */}


        </div>
      </Router>


    </div>
  );
}

export default App;
