import "../styles/app.css"
import React, {useState, useEffect} from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";
import WinScreen from "./WinScreen";
import {data} from "./data";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [usedCards, setCards] = useState([]);
  const [showCards, setShowCards] = useState(true);
  const [showWin, setShowWin] = useState(false);

  const checkLogic = (cardName) =>{
    if(usedCards.includes(cardName)){
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

  useEffect(() => {
    if(score === data.length){
      setScore(0);
      if(highScore !== data.length)
        setHighScore(data.length);
      setCards([]);
      setShowCards(false);
      setShowWin(true);
    }
  },[score]);
  
  return (
    <div className="app">
      <Header
        score={score}
        highScore={highScore}
      />
      
      {showCards && 
      <CardContainer
        checkLogic={checkLogic}
        score={score}
        highScore={highScore}
        usedCards={usedCards}
      />}
      
      {showWin && 
      <WinScreen
        setShowCards={setShowCards}
        setShowWin={setShowWin}        
      />}

    </div>
  );
}

export default App;
