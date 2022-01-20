import "../styles/scoreKeeper.css"

function ScoreKeeper({name ,score}){
    return(
        <div className="score-keeper">
            <h1>{name}: {score}</h1>
        </div>
    );
}

export default ScoreKeeper;