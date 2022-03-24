import './RollDice.css';
import './Die.css';

const Die = (props) => {

    return(
        <div>
            <i className={`Die fas fa-dice-${props.number} ${props.rolling ? 'shaking' : ""}`}></i>
        </div>
    )
}

export default Die;