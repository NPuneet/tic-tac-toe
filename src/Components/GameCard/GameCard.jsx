import React, { useState } from "react";
import css from "../GameCard/GameCard.module.css";
import cross from "../../assets/cross.svg";
import zero from "../../assets/zero.svg";
import inzero from "../../assets/inzero.svg";
import incross from "../../assets/incross.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GameSection from "../../Components/GameSection/GameSection";

const notify = () => {
  toast.success("Invite link copied", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
const copyUrl = () => {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl);
};

const GameCard = () => {
  const [selected, setSelected] = useState(null);
  const [showGame, setShowGame] = useState(false);
  return <GameSection /> ? (
    <GameSection />
  ) : (
    <>
      <div className={css.heroCard}>
        <div className={css.top}>
          <img src={cross} />
          <img src={zero} />
        </div>
        <div className={css.selectUser}>
          <div>
            <h1 className={css.heading}>PICK PLAYER </h1>
          </div>
          <div className={css.choice}>
            <button
              className={`${css.choice1} ${
                selected === "choice1" ? css.selected : ""
              } `}
              // disabled={selected === "choice1"}
              onClick={() => {
                setSelected("choice1");
              }}
            >
              <img src={incross} />
            </button>
            <button
              className={`${css.choice2} ${
                selected === "choice2" ? css.selected : ""
              } `}
              // disabled={selected === "choice2"}
              onClick={() => {
                setSelected("choice2");
              }}
            >
              <img src={inzero} />
            </button>
          </div>
        </div>
        <div className={css.buttons}>
          <div>
            <button
              className={css.btn1}
              onClick={() => {
                setShowGame(true);
              }}
            >
              NEW GAME ( VS CPU )
            </button>
          </div>
          <div>
            <button className={css.btn2}>
              NEW GAME ( VS HUMAN ) Coming soon
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                notify();
                copyUrl();
              }}
              className={css.btn3}
            >
              Invite your friend
            </button>

            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;
