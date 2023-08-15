import React from "react";
// import { withRouter } from "react-router";
import Color from "./HOC/Color";
import logo from '../../assets/image/binh.jpg'
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/Todos");
    // }, 3000);
  }

  render() {
    return (
      <>
        <img src={logo} alt="myphoto"/>
        <p>Demo web with ReactJS. By BTom</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </>
    );
  }
}

// export default withRouter(Home);
export default Color(Home);


