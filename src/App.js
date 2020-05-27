import React from 'react';
import Data from './components/data';
import Login from './pages/Login';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
//import Home from "./pages/Home";
//import Admin from "./pages/Admin";
import Signup from "./pages/Signup";
import Profil from "./pages/Profil";
import Posts from "./pages/Posts";
import CheckProfil from "./pages/CheckProfil";
import { AuthContext } from "./context/auth";

function App(props) {

  
  return (
    <AuthContext.Provider value={true}>
      <Router>
        <div>
          <ul>
          <li>
            <Link to="/login">Login Page</Link>
          </li>
          <li>
            <Link to="/signup">signup Page</Link>
          </li>
          <li>
            <Link to="/profil">profil Page</Link>
          </li>
          <li>
            <Link to="/checkprofil">check profil Page</Link>
          </li>
          <li>
            <Link to="/posts">Posts Page</Link>
          </li>
          </ul>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profil" component={Profil} />
          <Route path="/checkprofil" component={CheckProfil} />
          <Route path="/posts" component={Posts} />
          {/* <PrivateRoute path="/admin" component={Admin} /> */}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
