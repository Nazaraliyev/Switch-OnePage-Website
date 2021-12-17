import React,{useState} from 'react'

function RecentPost(props) {
    const [color, setcolor] = useState({
        style : {
            backgroundColor : props.color
        }
    })

    return (
        <div className = 'recent-post flex'>
            <div className = 'img'>
                <img src = {props.img} />
            </div>
            <div>
                <h3>{props.name}</h3>
                <span style = {color.style}>{props.category}</span>
            </div>

        </div>
    )
}

export default RecentPost
