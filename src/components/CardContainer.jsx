import "../styles/cardContainer.css"
import React, {useState, useEffect} from "react";
import Card from "./Card";
import { data } from "./data";

function CardContainer(props){
    const {checkLogic, score, highScore, usedCards} = props;
    const [cards, setNewCards] = useState([]);

    const shuffleCards = (newCards) =>{
        let t = 1;
        while(t){
            for(let i = 0; i < 10; i++){
                let rIdx;
                while(1){
                    rIdx = Math.floor(Math.random()*data.length);
                    if(!newCards.includes(data[rIdx]))
                        break;
                }
                newCards.push(data[rIdx]);
            }
            for(let i = 0; i < 10; i++){
                if(!usedCards.includes(newCards[i].name)){
                    t=0;
                    break;
                }
            }
        }
    };
    useEffect(() => {
        const newCards = [];
        shuffleCards(newCards);
        console.log(newCards);
        setNewCards(newCards);
    }, [score, highScore]);

    return(
        <div className="card-container">
            {cards.map(el => (
                <Card title={el.title} image={el.image} key={el.title} checkLogic={checkLogic}/>
            ))}
        </div>
    );
}

export default CardContainer;