import "./header.css"
import ScoreKeeper from "../ScoreKeeper/ScoreKeeper";

function Header(props){
    const {score, highScore} = props;

    return(
        <header>
            <h1 className="header-title">League of Memory</h1>
            <div className="score-container">
                <ScoreKeeper 
                    name="Current score"
                    score={score}
                />
                <ScoreKeeper
                    name="High-score"
                    score={highScore}
                />
            </div>
        </header>
    );
}

export default Header;
