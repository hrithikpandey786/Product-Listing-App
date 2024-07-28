import React from "react";
import "./homepage.scss";
import Card from "../../components/Card/Card";


export default function Homepage(){
    const [price, setPrice] = React.useState(0);

    function handleChange(e){
        setPrice(e.target.value);
    }

    return (
        <div className="homepage-container">
                <div className="filters">
                    <div className="filters-container">
                    <div className="input">
                        <div className="price-value">
                            <label htmlFor="price">PRICE</label>
                            {price && <span>{price}</span>}
                        </div>
                        <input type="range" id="price" min="9" max="999" value={price} step="1" onChange={handleChange}/>
                        <span id="price-span">$9.99-$999.99</span>
                    </div>

                    <div className="option">
                        <p>STOCK</p>
                        <span>+</span>
                    </div>
                    <div className="option">
                        <p>MANUFACTURER</p>
                        <span>+</span>
                    </div>
                    <div className="option">
                        <p>ACCESSORY TYPE</p>
                        <span>+</span>
                    </div>
                    <div className="option">
                        <p>AGE RATING</p>
                        <span>+</span>
                    </div>
                    <div className="option">
                        <p>CONDITION</p>
                        <span>+</span>
                    </div>
                    <div className="option">
                        <p>PLATFORM</p>
                        <span>+</span>
                    </div>
                    <div className="option">
                        <p>VERSION</p>
                        <span>+</span>
                    </div>
                    <div className="option">
                        <p>PRODUCT</p>
                        <span>+</span>
                    </div>
                    </div>
                </div>

                <div className="list">
                    <div className="top">
                        <div className="input">
                            <label htmlFor="options">SORT BY: </label>
                            <select id="options">
                                <option value="position">Position</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </select>
                        </div>
                        <div className="input">
                            <label htmlFor="options">Show:</label>
                            <select id="options">
                                <option value="">12</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </select>
                        </div>
                    </div>

                    <div className="cards">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    </div>

                        <div className="bottom">
                            <div className="boxes">
                                <div className="box">{"<"}</div>
                                <div className="box">{"1"}</div>
                                <div className="box">{"2"}</div>
                                <div className="box">{"3"}</div>
                                <div className="box">{"4"}</div>
                                <div className="box">{"5"}</div>
                                <div className="box">{">"}</div>
                            </div>
                        </div>
                </div>
        </div>
    )
}