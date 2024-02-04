import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import user from "./pages/user.jsx";
import updateUser from "./pages/updateUser.jsx";

const App = () => {
    return (
        <>
          <Router>
              <Routes>
                  <Route path="/user" Component={user}></Route>
                  <Route path="/user/:id/update" Component={updateUser}></Route>
              </Routes>
          </Router>
        </>
    );
};

export default App;