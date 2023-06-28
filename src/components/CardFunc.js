export default function Card({card, children}) {
    const {title, paragraph, link} = card;
    return (
        <div className="card" style={{width: '18rem'}}>
            {children}
            <div className="card__inner">
                <h5 className="card__title">{title}</h5>
                <p className="card__text">{paragraph}</p>
                <a href={link.href} className="card__btn">{link.text}</a>
            </div>
        </div>
    )
}