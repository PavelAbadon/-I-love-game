export default function GameCard() {
    return (
        <div className="game">
            <img src="./images/witcher.png" alt="The Witcher 3" />
            <div className="details-overlay">
                <p className="name">The Witcher 3</p>
                <p className="genre">Open World</p>
                <a href="#" className="details-button">
                    Details
                </a>
            </div>
        </div>
    )
}