import React from "react";
import "./card.scss";

export default function Card(){
    return(
        <div className="card-container">
            {/* <div className="body"> */}
                <img src="./1.png"></img>
                <p>EA SPORTS FC 25 Standard Edition</p>
                <div className="stars">
                    <img src="./star.png"></img>
                    <img src="./star.png"></img>
                    <img src="./star.png"></img>
                    <img src="./star.png"></img>
                    <img src="./star.png"></img>
                </div>
                <p className="price">$39.99</p>
                <button>Add to Cart</button>
            {/* </div> */}
        </div>
    )
}