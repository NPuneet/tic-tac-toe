import React, { useEffect, useState } from "react";
import css from "../../Components/GameSection/GameSection.module.css";
import X from "../../assets/cross.svg";
import O from "../../assets/zero.svg";
import zero from "../../assets/inzero.svg";
import cross from "../../assets/incross.svg";
import refresh from "../../assets/refresh.svg";
let arr = [null, null, null, null, null, null, null, null, null];
const GameSection = ({ selected }) => {
  useEffect(() => {
    savePlayerChoice(selected);
    setPlayerTurn(selected);
  }, [selected]);
  const [active, setActive] = useState(false);
  const [squares, setSquares] = useState(arr);
  const [playerTurn, setPlayerTurn] = useState(selected);

  const savePlayerChoice = (selected) => {
    localStorage.setItem("playerChoice", selected);
  };
  const checkWinningMoves = (squares, playerTurn) => {

    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        squares[a] === playerTurn &&
        squares[a] === squares[b] &&
        squares[c] === null
      ) {
        return c;
      } else if (
        squares[b] === playerTurn &&
        squares[b] === squares[c] &&
        squares[a] === null
      ) {
        return a;
      } else if (
        squares[a] === playerTurn &&
        squares[a] === squares[c] &&
        squares[b] === null
      ) {
        return b;
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (playerTurn && squares[index] === null) {
      squares[index] = playerTurn;
      const blockMoveIndex = checkWinningMoves(
        squares,
        playerTurn === "cross" ? "zero" : "cross"
      );

      if (blockMoveIndex !== null) {
        squares[blockMoveIndex] = playerTurn === "cross" ? "zero" : "cross";
        setSquares([...squares]); 
        setPlayerTurn(playerTurn === "cross" ? "zero" : "cross");
      } else {
        setSquares([...squares]); 
        setPlayerTurn(playerTurn === "cross" ? "zero" : "cross");
        setTimeout(computerTurn, 2000);
      }
    }
  };

  const renderTurnImage = () => {
    if (playerTurn === "cross") {
      return <img src={cross} alt="Cross" />;
    } else {
      return <img src={zero} alt="Zero" />;
    }
  };
  const computerTurn = () => {
    const squaresCopy = [...squares];
    const availableSquares = squaresCopy
      .map((square, index) => (square === null ? index : null))
      .filter((index) => index !== null);

    if (availableSquares.length > 0) {
      const randomIndex =
        availableSquares[Math.floor(Math.random() * availableSquares.length)];
      squaresCopy[randomIndex] = playerTurn === "cross" ? "zero" : "cross";
      setSquares(squaresCopy);
      setPlayerTurn(playerTurn === "cross" ? "zero" : "cross");
    }
  };
  return (
    <>
      <div className={css.GameSection}>
        <div className={css.top}>
          <div className={css.img}>
            <img src={X} alt="" />
            <img src={O} alt="" />
          </div>
          <div className={css.turn}>
            <div>{renderTurnImage()}</div>
            <div className={css.text}> TURN</div>
          </div>
          <div
            className={css.refresh}
            onClick={() => {
              setActive(true);
            }}
          >
            <img src={refresh} alt="" />
          </div>
        </div>
        <div className={css.gameBoard}>
          {squares.map((value, index) => (
            <div
              key={index}
              className={css.kids}
              onClick={() => handleClick(index)}
            >
              {value === "cross" && <img src={X} alt="Cross" />}
              {value === "zero" && <img src={O} alt="Zero" />}
            </div>
          ))}
        </div>
        <div className={css.score1}>
          <span>X (YOU)</span>
          <span>0</span>
        </div>
        <div className={css.score2}>
          <span>TIES</span>
          <span>0</span>
        </div>
        <div className={css.score3}>
          <span>O (CPU)</span>
          <span>0</span>
        </div>
        {active && (
          <div className={css.overlay}>
            <div className={css.dialogOverlay}>
              <div className={css.message}>Do you want to quit ?</div>
              <div className={css.choice}>
                <button className={css.btn1} onClick={() => setActive(false)}>
                  PLAY AGAIN
                </button>
                <button className={css.btn2} onClick={() => setActive(false)}>
                  QUIT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GameSection;
