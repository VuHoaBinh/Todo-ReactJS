import logo from "./logo.svg";
import "./App.scss";
import Mycomponent from "./example/Mycomponents";
import ListToDo from "./Todo/ListToDo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./nav/Nav";
import Home from "./example/Home";
// react router library
import { BrowserRouter, Switch, Route } from "react-router-dom";
// routes -> switch
import ListUsers from "./Users/ListUsers";
import DetailUser from "./Users/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact={"true"} component={Home} />
            <Route path="/todo" component={ListToDo} />
            <Route path="/user" component={ListUsers} />
            <Route path="/user/:id" component={DetailUser} />
            <Route path="/about" component={Mycomponent} />
          </Switch>
        </header>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
