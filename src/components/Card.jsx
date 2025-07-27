import './Card.css'

export default function Card({title, frontText, backText, link, linkText}){
    return(
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <h2>{title}</h2>
                    <p>{frontText}</p>
                </div>
                <div className="card-back">
                    <p>{backText}</p>
                    {link && <a href={link} target="_blank" rel='noopener noreferrer'>{linkText|| 'View more'}</a>}
                </div>
            </div>
        </div>
    )
}