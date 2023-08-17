import React from "react";
import "./Nav.scss";
// import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div className="topnav">
            <a className="active" href="/" exact={"true"}>
              Home
            </a>
            <a href="/todo">Todos</a>
            <a href="/user">Users</a>

            <a href="/about">About</a>
            {/* <NavLink to="/" activeClassName="active" exact={true}>
              Home
            </NavLink>
            <NavLink to="/todo" activeClassName="active">
              Todos
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default Nav;
