import { useState } from "react";
import Die from "./Die";

const RollDice = () => {

    const [dieRoll1, setDieRoll1] = useState('');
    const [dieRoll2, setDieRoll2] = useState('');
    const [rolling, setIsRolling] = useState(false);

    const handleRoll = () => {

    }

    return (
        <div className="RollDice">
            <div className="RollDice-dice-pair">
                <Die />
                <Die />
            </div>
            
            <button className="RollDice-btn">{(rolling === true) ? "Rolling Dice" : "Roll Dice"}</button>
        </div>
    );
}

export default RollDice;