import React from "react";

function Answer(props) {
  return (
    <div className="answer">
      <button onClick={props.handleAnswer("true")}>True</button>
      <button onClick={props.handleAnswer("false")}>False</button>
    </div>
  );
}

export default Answer;
