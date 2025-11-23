import { useEffect, useState } from "react"
import GameCard from "../game-card/GameCard";

export default function Home() {
  const [latestGames, setLatestGames] = useState([]);

  useEffect(() =>{
    try {
      fetch ('http://localhost:3030/jsonstore/games')
      .then(response => response.json())
      .then(result =>{
       const resultGames = Object.values(result)
                    .sort((a, b) => a._createdOn - b._createdOn)
                    .slice(0, 3);

         
        setLatestGames(resultGames)
      })

    } catch (err) {
      alert(err.message);
    }

  },[]);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in </h3>
        <img id="logo-left" src="./images/logo.png" alt="logo" />
      </div>
      <div id="home-page">
        <h1>Latest Games</h1>
        <div id="latest-wrap">
          {/* Display div: with information about every game (if any) */}
          <div className="home-container">
            {latestGames.map(game => <GameCard key={game._id} {...game}/>)}
            
            {/* Display paragraph: If there is no games  */}
            {/* <p class="no-articles">No games yet</p> */}
          </div>
        </div>
      </div>
    </section>
  )
}