import { useEffect, useState } from "react";
import Die from "./Die";
import './RollDice.css';

const RollDice = () => {

    const [dieRoll1, setDieRoll1] = useState('one');
    const [dieRoll2, setDieRoll2] = useState('one');
    const [rolling, setIsRolling] = useState(false);

    const handleRoll = () => {
        let options = ["one", "two", "three", "four", "five", "six"];
        const randomIdx1 = options[Math.floor(Math.random() * options.length)];
        const randomIdx2 = options[Math.floor(Math.random() * options.length)];
        setDieRoll1(randomIdx1);
        setDieRoll2(randomIdx2);
    }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log("the dice are in play")
    //     }, 2000);
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className="RollDice">
            <div className="RollDice-dice-pair">
                <Die number={dieRoll1} />
                <Die number={dieRoll2} />
            </div>
            
            <button onClick={handleRoll} className="RollDice-btn">{(rolling === true) ? "Rolling Dice" : "Roll Dice"}</button>
        </div>
    );
}

export default RollDice;