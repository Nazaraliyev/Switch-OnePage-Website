import React from 'react'
import Img from '../SourceFiles/Main/HomeImage1.jpg'

function FlexBox(props) {
    return (
        <div className= 'flexbox'>
            <img src = {props.img} />
            <div>
                <a href = {props.link} target = '_blank'>
                    <h4>{props.name}</h4>
                </a>
            </div>
        </div>
    )
}

export default FlexBox
