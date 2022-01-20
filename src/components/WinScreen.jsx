import "../styles/winScreen.css"
import winImg from "../images/victory.png"

function WinScreen(props){
    const {setShowCards, setShowWin} = props;
    
    const reset = ()=>{
        setShowWin(false);
        setShowCards(true);
    }

    return(
        <div className="win-screen">
            <h1>Congratulations!</h1>
            <h2>You completed the game</h2>
            <img className="win-img" src={winImg} alt="victory sign"/>
            <button className="reset-btn" onClick={reset}>Restart game</button>
        </div>
    );
}

export default WinScreen;