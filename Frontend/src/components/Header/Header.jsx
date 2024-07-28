import React from "react";
import "./header.scss";

export default function Header(){
    return(
        <div className="header-container">
            <div className="header-options">
                <a href="/">HOME</a>
                <div className="input">
                    <label htmlFor="options"></label>
                    <select id="options">
                        <option value="">PLAYSTATION</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
                <div className="input">
                    <label htmlFor="options"></label>
                    <select id="options">
                        <option value="">NINTENDO</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
                <div className="input">
                    <label htmlFor="options"></label>
                    <select id="options" className="xbox-select">
                        <option value="">XBOX</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
                <div className="input">
                    <label htmlFor="options"></label>
                    <select id="options">
                        <option value="">PC GAMING</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
                <a href="/">MISCELLANEOUS</a>
                <div className="input">
                    <label htmlFor="options"></label>
                    <select id="options">
                        <option value="">RETRO GAMING</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
                <div className="input">
                    <label htmlFor="options"></label>
                    <select id="options">
                        <option value="">TRADING CARDS</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
                <a href="/">SALE</a>
            </div>

            <div className="cart">
            <div className="input">
                    <label htmlFor="options"><img src="./cart.png"></img></label>
                    <select id="options">
                        <option value=""></option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
            </div>
        </div>
    )
}