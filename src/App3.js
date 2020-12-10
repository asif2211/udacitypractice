import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Score from './Score';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
     
      numQuestions:0,
      numCorrect : 0
    }
  }
  
  generateNumber = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + value1 + value2 + value3;
      return [value1,value2,value3,proposedAnswer];
  };
  
  onButtonClick = (isEquat)=>{
    this.setState((currentState)=>({
      numQuestions:currentState.numQuestions + 1,
      numCorrect : isEquat ? currentState.numCorrect+1 :currentState.numCorrect
    }))
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
           <Game   randomNumber={this.generateNumber} onClikButton={this.onButtonClick}/>
           
          </div>
          
          <Score iscorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
        </div>
      </div>
    );
  }
}

export default App;
