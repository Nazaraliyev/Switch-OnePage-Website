import React from 'react'

function SosialMedia(props) {
    return (
        <div className = 'team-sm-wrapper flex'>
        <div className = 'team-sm flex'>
            {props.sm.map(item => {
                console.log(item.link);
                return(
                    <a href = {item.link} target = '_blank'>
                        <img src = {item.img}   />
                    </a>
                    
                )
            })} 
        </div>
        </div>
    )
}

export default SosialMedia
