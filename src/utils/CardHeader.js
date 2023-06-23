import React from 'react'
import "../style/cardHeader.css";

const CardHeader = (props) => {
    return (
        <>
            <div className="header" style={{ justifyContent: props.justifyContent, margin: props.margin }}>
                <h1 style={{ fontSize: props.size + 'px', color:props.color }}>{props.header}</h1>
                <div></div>
            </div>
        </>
    )
}

export default CardHeader