import Card from "./CardFunc";

export default function Cards(props) {
    const {cards} = props;

    return (
        <>
            {cards.map(item => 
                <Card card={item}>
                    {item.image ? <img src={item.image.src} className="card__img" alt={item.image.alt}/> : null}
                </Card>
            )}
        </>
    )
}