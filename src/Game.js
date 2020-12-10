import React, { Component } from "react";
import Score from "./Score";
export default class Game extends Component {
  constructor(props) {
    super(props);
    const randomnum = this.props.randomNumber();

    this.state = {
      value1: randomnum[0],
      value2: randomnum[1],
      value3: randomnum[2],
      proposedAnswer: randomnum[3],
    };
  }
  matchAnswer = (iscorrect) => {
    const sumOfvalue =
      this.state.value1 + this.state.value2 + this.state.value3;
    const sumOfProposed = this.state.proposedAnswer;
    alert(sumOfvalue);
    alert(sumOfProposed);
    const matchAns = sumOfvalue === sumOfProposed;

    return matchAns === iscorrect;
  };
  updateState = () => {
    const randomnum = this.props.randomNumber();
    this.setState({
      value1: randomnum[0],
      value2: randomnum[1],
      value3: randomnum[2],
      proposedAnswer: randomnum[3],
    });
  };
  onButtonClick = (e) => {
    this.updateState();

    const iscorrect = Boolean(e.target.innerText === "False" ? false : true);
    const Value = this.matchAnswer(iscorrect);

    return this.props.onClikButton(Value);
  };

  render() {
    return (
      <div>
        <div>
            
          <p className="text">
            {this.state.value1} + {this.state.value2}+{this.state.value3} ={" "}
            {this.state.proposedAnswer}
          </p>
        </div>
        <button onClick={(e) => this.onButtonClick(e)}>True</button>
        <button onClick={this.onButtonClick}>False</button>
      </div>
    );
  }
}
