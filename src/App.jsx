import { useState, useEffect } from "react";
import Game from "./components/Game";
import Start from "./components/Start";
import Statistic from "./components/Statictic";
import "./App.css";

const App = () => {
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [maxwellFound, setMaxwellFound] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [openStatistic, setOpenStatistic] = useState(false);

  const updateGamesPlayed = () => {
    setGamesPlayed((prevGamesPlayed) => {
      const newGamesPlayed = Number(prevGamesPlayed) + 1;
      localStorage.setItem("games-played", newGamesPlayed);
      return newGamesPlayed;
    });
  };

  const updateMaxwellFound = () => {
    setMaxwellFound((prevMaxwellFound) => {
      const newMaxwellFound = Number(prevMaxwellFound) + 1;
      localStorage.setItem("maxwell-found", newMaxwellFound);
      return newMaxwellFound;
    });
  };

  const clearStatistic = () => {
    setGamesPlayed(0);
    localStorage.setItem("games-played", 0);
    setMaxwellFound(0);
    localStorage.setItem("maxwell-found", 0);
  };

  useEffect(() => {
    const initialGames = localStorage.getItem("games-played");
    const initialFound = localStorage.getItem("maxwell-found");
    if (initialGames) setGamesPlayed(initialGames);
    if (initialFound) setMaxwellFound(initialFound);
  }, []);

  const openStatisticHandler = () => {
    setOpenStatistic(true);
  };

  const closeStatisticHandler = () => {
    setOpenStatistic(false);
  };

  const startGameHandler = () => {
    setStartGame(true);
  };

  return (
    <div className="wrapper">
      {openStatistic ? (
        <Statistic
          onClick={closeStatisticHandler}
          clearStatistic={clearStatistic}
        />
      ) : startGame ? (
        <Game
          setStartGame={setStartGame}
          updateGamesPlayed={updateGamesPlayed}
          updateMaxwellFound={updateMaxwellFound}
        />
      ) : (
        <Start
          onClick={startGameHandler}
          openStatisticHandler={openStatisticHandler}
        />
      )}
    </div>
  );
};

export default App;
