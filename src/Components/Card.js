import React from "react";
import styled from "styled-components";

const Card = ({img,text}) =>
{
    return(
        <div className="card" >
            <div className="icon" style={{display:"flex",alignItems:"center"}}>
                <img src={img} alt="clock icon" />
                <h3 style={{marginLeft:"1rem",background: "#fff",color:"#000",padding:"1rem"}}>{text}</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

export default Card;