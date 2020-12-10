import React, { Component } from "react";
import UsersList from "./UsersList4";
export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      username: "",
      game: 0,
      hide: false,
    };
  }
  handleUserInput = (e) => {
    const name = e.target.name;

    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  addUsers = (e) => {
    e.preventDefault();
    if (
      this.props.userList.filter(
        (item) => item.username === this.state.username
      ).length > 0
    ) {
      alert("user name must be unique");
    } else {
      this.setState({ unique: true });
      this.props.handleButton({ ...this.state });
      this.setState({
        fname:'',
        lname:'',
        username:''
      })
    }
  };
  deleteUsers = (users) => {
    this.props.removeUser(users);
  };
  emptyFiled = ()=>{
    return  this.state.username ==="" || this.state.fname ==="" || this.state.lname ==='';
  }
  gameHandle = ()=>{
    
    if(this.props.userList.filter(
      (item) => item.username
    ).length > 0)
    {
    this.setState((prevState)=>({
      hide : !prevState.hide,
    }))
  }
    else {
      alert("user not exist")
    }
  
  }
 
  render() {
    const { handleButton, userList, } = this.props;
    return (
      <div>
        <div className="container">
          <div className="form">
            <div>
              <h2>User Game List</h2>
            </div>
            <form onSubmit={this.addUsers}>
              <div>
                <input
                  name="fname"
                  type="text"
                  required
                  autoComplete="new-password"
                  placeholder="first name"
                  value={this.state.fname}
                  onChange={this.handleUserInput}
                />
              </div>
              <div>
                <input
                  name="lname"
                  type="text"
                  required
                  autoComplete="new-password"
                  placeholder="last name"
                  value={this.state.lname}
                  onChange={this.handleUserInput}
                />
              </div>
              <div>
                <input
                  name="username"
                  type="text"
                  required
                  autoComplete="new-password"
                  placeholder="user name"
                  value={this.state.username}
                  onChange={this.handleUserInput}
                />
              </div>
              <div></div>
              <button className={this.emptyFiled ? "emptyfiled" :"button"}  disabled={this.emptyFiled()}>submit</button>
            </form>
          </div>

          <UsersList
            Userdata={userList}
            isunique={this.state.unique}
            gameplayed={this.state.game}
            removeButton={this.deleteUsers}
            hide={this.state.hide}
            gamehandle={this.gameHandle}
          />
        </div>
      </div>
    );
  }
}
