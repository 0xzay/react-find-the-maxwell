import { useState, useEffect } from "react";
import useSound from "use-sound";
import maxwellMusic from "../../assets/music.mp3";
import Box from "../Box";
import "./style.css";

const Game = ({ setStartGame, updateGamesPlayed, updateMaxwellFound }) => {
  const [boxes, setBoxes] = useState(Array(9).fill(false));
  const [catIndex, setCatIndex] = useState(Math.floor(Math.random() * 9));
  const [done, setDone] = useState(false);
  const [play, { stop }] = useSound(maxwellMusic);

  const stopGameHandler = () => {
    stop();
    setStartGame(false);
    updateGamesPlayed();
  };

  const handleBoxClick = (i) => {
    if (done) {
      return;
    }

    if (i === catIndex) {
      play();
      const newBoxes = [...boxes];
      newBoxes[i] = true;
      setBoxes(newBoxes);
      updateMaxwellFound();
      setDone(true);
    } else {
      setDone(true);
    }
  };

  return (
    <div className="game">
      <h1 className="game__header">Maxwell in one of the boxes</h1>
      <div className={`modal ${done && !boxes[catIndex] ? `open` : ""}`}>
        <div className="modal__wrapper">
          <p className="modal__header">You don't found Maxwell :(</p>
          <button className="modal__button" onClick={stopGameHandler}>
            OK
          </button>
        </div>
      </div>
      <div className="box-container">
        {boxes.map((box, i) => (
          <Box
            key={i}
            index={i}
            catIndex={catIndex}
            box={box}
            done={done}
            onClick={handleBoxClick}
          />
        ))}
      </div>
      {done && boxes[catIndex] ? (
        <div className="found">
          <p>You found Maxwell!</p>
          <button className="game__button" onClick={stopGameHandler}>
            Restart 😺
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
