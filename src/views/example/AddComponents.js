import React from "react";

class AddComponent extends React.Component {
  handleOnChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleOnChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleOnClickButton = (event) => {
    event.preventDefault();
    if(!this.state.firstName || !this.state.lastName){
        alert("Please select to fill");
        return;
    }
    console.log("input: ", this.state);
    // alert("successful"); 
    this.props.addNewState({
      id: Math.floor(Math.random() * 1000),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });

    this.setState({
        firstName:'',
        lastName:''
    })
  };

  state = {
    firstName: "",
    lastName: "",
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleOnChangeFirstName(event)}
          />
          <br />

          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleOnChangeLastName(event)}
          />
          <br />

          <input
            type="submit"
            value="Submit"
            style={{color: 'red'}}
            onClick={(event) => this.handleOnClickButton(event)}
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
