import './RollDice.css';

const Die = (props) => {

    return(
        <div>
            <i className={`Die fas fa-dice-${props.number}`}></i>

        </div>
    )
}

export default Die;