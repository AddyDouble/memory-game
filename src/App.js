import "./app.css"
import React, {useState} from "react";
import Header from "./components/Header/Header";
import CardContainer from "./components/CardContainer/CardContainer";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardArr, setCards] = useState([]);

  const checkLogic = (cardName) =>{
    if(cardArr.includes(cardName)){
      if(score > highScore)
        setHighScore(score);
      setScore(0);
      setCards([]);
    }
    else{
      setScore(score+1);
      setCards((prevState) => [...prevState, cardName]);
    }
  }

  return (
    <div className="app">
      <Header
        score={score}
        highScore={highScore}
      />
      <CardContainer
        checkLogic={checkLogic}
        score={score}
        highScore={highScore}
      />
    </div>
  );
}

export default App;
