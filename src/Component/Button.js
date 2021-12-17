import React from 'react'

function Button(props){
    return (
        <div className = 'button-container'>
            <button>{props.name}</button>
        </div>
    )
}

export default Button
