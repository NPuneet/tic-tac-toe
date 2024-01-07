import React from "react";
import css from "../../Components/GameSection/GameSection.module.css";
import cross from "../../assets/cross.svg";
import zero from "../../assets/zero.svg";
import inzero from "../../assets/inzero.svg";
const GameSection = () => {
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
            <div className={css}> TURN</div>
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
      </div>
    </>
  );
};

export default GameSection;
