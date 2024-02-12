import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import user from "./pages/user/user.jsx";
import updateUser from "./pages/user/updateUser.jsx";
import addUser from "./pages/user/addUser.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
    return (
        <>
          <Router>
              <Routes>
                  <Route index Component={Home}></Route>
                  <Route path="/users" Component={user}></Route>
                  <Route path="/user/:id/update" Component={updateUser}></Route>
                  <Route path="/user/new" Component={addUser}></Route>
              </Routes>
          </Router>
        </>
    );
};

export default App;