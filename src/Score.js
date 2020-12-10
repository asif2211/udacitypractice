import React, { Component } from 'react'

export default class Score extends Component {
    constructor(props)
    {
        super(props)
        
    }

    
    render() {
        const {iscorrect, numQuestions} = this.props;
        return (
            <div>
            <p>Here is your score  : {iscorrect}/{numQuestions}</p>
            </div>
        )
    }
}
