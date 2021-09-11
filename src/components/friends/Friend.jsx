import React from 'react'
import "./Friend.css";
const Friend = (props) => {
    return (
        <div className="section">
    <button class="img-btn">
        <img src="" alt="" />
    </button>
    <p className="names">{props.name}</p>
    <button className="btn btn-outline-success chat">Chat</button>

        </div>
    )
}

export default Friend



