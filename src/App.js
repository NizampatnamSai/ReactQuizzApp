import { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText: "What language is spoken in Brasil?",
    answerOptions: [
      { answerText: "Portugues", isCorrect: true },
      { answerText: "English", isCorrect: false },
      { answerText: "French", isCorrect: false },
      { answerText: "German", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which countries have the hieghest and lowest life expectancy in the world?",
    answerOptions: [
      { answerText: "Australia and Afghnistan", isCorrect: false },
      { answerText: "Japan and sierra", isCorrect: true },
      { answerText: "Italy", isCorrect: false },
      { answerText: "Brasil", isCorrect: false },
    ],
  },
  {
    questionText: "Which company created the iPhone?",
    answerOptions: [
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Apple", isCorrect: true },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How to learn to program?",
    answerOptions: [
      { answerText: "Practising what you learn", isCorrect: true },
      { answerText: "Watching video", isCorrect: false },
      { answerText: "Reading", isCorrect: false },
      { answerText: "Writing", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [wrongscore,setWrongscore]=useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
    if(!isCorrect){
      setWrongscore(wrongscore+1)
    }
    

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  } 


  let actualScore=(score*5-(wrongscore*4));

  const styles={
    background:'red',
    // progress::-webkit-progress-value {background-color: green !important;}
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <b className="points">Points</b> <span>{actualScore}</span>
          <div className="result_res"><b>Right Ans</b>  <progress className="rightans" value={score} max={4} />
          <b>Wrong Ans</b> <progress className="wrongans" value={wrongscore} max={4} />
          </div> 
         
        <div className="result_footer">  You scored {score} out of {questions.length} </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count"> 
            <b className="points">Points</b> <span className="score">{actualScore}</span>
             <div className="progress"><b>Right Ans</b> <progress className="rightans" value={score} max={4} /></div> 
            <div> <b>Wrong Ans</b> <progress className="wrongans" value={wrongscore} max={4} style={styles}></progress></div>
              <span className="question">Question {currentQuestion + 1}</span>/{questions.length}
            
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
          <b>Note: Right ans is 5 points and Wrong ans leads to -4 ponits</b>
         
        </>
         
      )}
    </div>
  );
}

export default App;