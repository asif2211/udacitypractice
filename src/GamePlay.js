import React from 'react'

export default function GamePlay(props) {
    const {hide,gamehandle}  = props;
    
        return (
            <div>
                
                <button onClick={gamehandle
                
                }>{hide ? "Show the Numbe of Game played" :"Hide the Numbe of Game played" }</button>
                
            </div>
        )
    
    
    
}
