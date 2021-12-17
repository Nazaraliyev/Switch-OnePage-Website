import React from 'react'
import SosialMedia from './SosialMedia'

function TeamDiv(props) {
    return (
        <div className = 'team-div'>
            <div className = 'team-image flex'>
            <img src = {props.photo}/>
            </div>
            <div className = 'team-line-wrapper flex'>
            <div className = 'team-line'></div>
            </div>
            <h2>{props.name}</h2>
            <SosialMedia sm = {props.sm}/>
        </div>
    )
}

export default TeamDiv
