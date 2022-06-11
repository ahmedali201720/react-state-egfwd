import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Question from "./Question";
import Answer from "./Answer";
import Score from "./Score";

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

function App() {
  const [currentState, setNewState] = useState({
    numCorrect: 0,
    numQuestions: 0,
  });

  const handleQuestionAnswer = (answer) => {
    const answerState =
      value1 + value2 + value3 === proposedAnswer ? "true" : "false";
    if (answerState === answer) {
      setNewState((current) => ({
        numCorrect: current.numCorrect + 1,
        numQuestions: current.numQuestions + 1,
      }));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <Question
          value1={value1}
          value2={value2}
          value3={value3}
          proposedAnswer={proposedAnswer}
        />
        <Answer handleAnswer={handleQuestionAnswer} />
        <Score
          numCorrect={currentState.numCorrect}
          numQuestions={currentState.numQuestions}
        />
      </div>
    </div>
  );
}

export default App;
