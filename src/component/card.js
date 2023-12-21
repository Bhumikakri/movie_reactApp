// import AllButton from "./button";
import "./card.css";

const Card = (props) =>{
    return (
        <>
        <div className="movieDtl">
        <div className="Container">
        <div className="cardInfo">
            <div className="content">
                <div className="titleDtl">
                    <div className="Image">
                        <img src={props.Img} alt="error" />
                    </div>
                    <div className="movietitleDtl">
                        <h1>{props.title}</h1>
                        <p className="timing">{props.year}</p>
                        <div className="runGenre">
                            <p className="run">{props.runTime}</p>
                            <p>{props.Genre}</p>
                        </div>
                    </div>
                </div>
                <p className="para">
                {props.plot}
                </p>
                <div className="iconss">
                <i class="fa-solid fa-share-nodes"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-message"></i>
                </div>
            </div>
            
        </div>
            <div className="sideImage" style = {{background: `linear-gradient(to right, rgba(15, 15, 15, 1), rgba(0, 0, 0, 0)), 
            url(${props.Img}) center`}}>

            </div>
        </div>
        </div>
        
        {/* <AllButton title ={props.tittle}/> */}
        </>
        
    );
}

export default Card;