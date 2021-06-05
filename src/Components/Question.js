import React from "react";

const Question = ({ question }) => {
  return (
    <div className="question" style={{padding: "3rem 0rem",cursor:"pointer"}}>
      <h4>{question}</h4>
      <div className="answer" style={{padding:"2rem 0rem"}}>
        <p style={{padding : "1rem 0rem"}}>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum
          dolor sit ametLorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  );
};
export default Question;
