import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users4";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    userList: [],
    
  };
  handleButton = (user) => {
    this.setState((prevState) => ({
      userList: [...prevState.userList, user],
    }));
  };
  removeUser = (users) => {
    

    this.setState((prevState) => ({
      userList: prevState.userList.filter((c) => {
        return c.username != users;
      }),
    }));
  };
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Users
          handleButton={this.handleButton}
          userList={this.state.userList}
          removeUser={this.removeUser}
        />
      </div>
    );
  }
}

export default App;
