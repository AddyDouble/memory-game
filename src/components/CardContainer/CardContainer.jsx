import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import { data } from "../data";
import "./cardContainer.css"

function CardContainer(props){
    const {checkLogic, score, highScore} = props;
    const [cards, setNewCards] = useState(data);

    const shuffleCards = (newCards) =>{
        for(let i = newCards.length-1; i > 0; i--){
            let rIdx = Math.floor(Math.random()*i);
            [newCards[rIdx], newCards[i]] = [newCards[i], newCards[rIdx]];
        }
    };
    useEffect(() => {
        const newCards = [...cards];
        shuffleCards(newCards);
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