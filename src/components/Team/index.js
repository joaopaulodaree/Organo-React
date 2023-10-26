import Card from '../Card';
import './Team.css';

const Team = (props) => {
    return (
        props.cards.length > 0 && <section className="team" style={{ backgroundColor: props.secundaryColor }}>
            <h3 style={{ borderBottomColor: props.primaryColor }}>{props.name}</h3>
            <div className = "cards">
                {props.cards.map(card => <Card name={card.name} job={card.job} image={card.image} color={props.primaryColor}/>)}
            </div>
        </section>
    )
}

export default Team;