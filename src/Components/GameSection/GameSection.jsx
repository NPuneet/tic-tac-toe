import React, { useState } from "react";
import css from "../../Components/GameSection/GameSection.module.css";
import cross from "../../assets/cross.svg";
import zero from "../../assets/zero.svg";
import inzero from "../../assets/inzero.svg";
import refresh from "../../assets/refresh.svg";
const GameSection = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={css.GameSection}>
        <div className={css.top}>
          <div className={css.img}>
            <img src={cross} alt="" />
            <img src={zero} alt="" />
          </div>
          <div className={css.turn}>
            <div>
              <img src={inzero} alt="" />
            </div>
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
        <div className={css.kids}></div>
        <div className={css.kids}></div>
        <div className={css.kids}></div>
        <div className={css.kids}></div>
        <div className={css.kids}></div>
        <div className={css.kids}></div>
        <div className={css.kids}></div>
        <div className={css.kids}></div>
        <div className={css.kids}></div>
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
