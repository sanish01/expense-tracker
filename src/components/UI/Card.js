import './Card.css';

const Card = (porps) => {
    const cards = "card " + porps.className;
    return <div className={cards}>{porps.children}</div>
}

export default Card;