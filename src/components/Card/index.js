import './Card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <div className='header' style={{backgroundColor: props.color}}>
                <img src={props.image} alt={props.name}></img>
            </div>
            <div className='footer'>
                <h4 style={{color: props.color}}>{props.name}</h4>
                <h5>{props.job}</h5>
            </div>
        </div>
    )
}

export default Card;