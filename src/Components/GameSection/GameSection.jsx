import React from "react";
import css from "../../Components/GameSection/GameSection.module.css";
import cross from "../../assets/cross.svg";
import zero from "../../assets/zero.svg";
const GameSection = () => {
  return (
    <>
      <div className={css.GameSection}>
        
          <img src={cross} alt="" />
          <img src={zero} alt="" />
        <button></button>
        
        
        <div className={css.kids}>a</div>
        <div className={css.kids}>a</div>
        <div className={css.kids}>a</div>
        <div className={css.kids}>a</div>
        <div className={css.kids}>a</div>
        <div className={css.kids}>a</div>
        <div className={css.kids}>a</div>
        <div className={css.kids}>a</div>
        <div className={css.kids}>a</div>
      </div>
    </>
  );
};

export default GameSection;
