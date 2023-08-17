import React from "react";
// import { withRouter } from "react-router";
import Color from "./HOC/Color";
import logo from "../../assets/image/binh.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/Todos");
    // }, 3000);
  }

  handleOnClickDelete = (user) => {
    // alert("oke oke delete");
    console.log(user);
    this.props.deleteUserRedux(user);
  };

  handleOnClickCreate = () => {
    this.props.addUserRedux();
  };

  render() {
    console.log("Pros......: ", this.props.dataRedux);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <img src={logo} alt="myphoto" />
        <p>Demo web with ReactJS. By BTom</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}
                  <></>
                  <span onClick={() => this.handleOnClickDelete(item)}>
                    <button>Delete</button>
                  </span>
                </div>
              );
            })}
          <span onClick={() => this.handleOnClickCreate()}>
            <button>Add</button>
          </span>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "ADD" }),
  };
};

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
