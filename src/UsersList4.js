import React, { Component, useState } from "react";
import GamePlay from "./GamePlay";

const UsersList = (props) => {
  const { isunique, Userdata, gameplayed, removeButton,hide,gamehandle} = props;

  return (
    <div className="table" >
      <table border="1" width="100%" style={{border:'.1rem solid #e0e0e0'}}>
        <thead>
          <tr className="heading">
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>
            <th>Gaming</th>
            <th>Action</th>
          </tr>
          
        </thead>
        <tbody>
        {Userdata.map((user) => (
        <tr className="users">
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.username}</td>
            <td>{hide? "--" :gameplayed}</td>
            <td><button  onClick={() => removeButton(user.username)}>Delete</button></td>
          </tr>
          ))}
        </tbody>
        
      </table>
      <GamePlay hide={hide} gamehandle={gamehandle}/>
      
    </div>
  );
};
export default UsersList;
