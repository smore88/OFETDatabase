import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>; //childrens from is always the content in between the opening and closing tags of the card
}

export default Card;