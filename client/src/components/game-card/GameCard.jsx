export default function GameCard({
    _id,
    genre,
    imageUrl,
    title
}) {
    return (
        <div className="game">
            <img src={imageUrl} alt={title} />
            <div className="details-overlay">
                <p className="name">{title}</p>
                <p className="genre">{genre}</p>
                <a href="#" className="details-button">
                    Details
                </a>
            </div>
        </div>
    )
}