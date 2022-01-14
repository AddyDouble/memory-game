import "./card.css"

function Card(props){
    const {title,image, checkLogic} = props
    return(
        <div className="card" onClick={checkLogic.bind(this, title)}>
            <img className="card-img" src={image} alt={title}/>
            <h1 className="card-title">{title}</h1>
        </div>
    );
}

export default Card;