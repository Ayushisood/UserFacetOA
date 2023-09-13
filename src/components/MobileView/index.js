import React from "react";
import styled from "styled-components";
import UFLogo from "../../assets/images/uf_logo.svg";
// import { BsFlag } from "react-icons/bs";
import { PiFlagCheckeredFill } from "react-icons/pi";
import { TfiTimer } from "react-icons/tfi";
import { useTimer } from "../../customHooks/useTimer";

export const MobileView = ({score, currentWord}) => {
  const [minutes, seconds] = useTimer();
  return (
    <MobileWrapper>
      {/* logo */}
      <div className="mobile_logo">
        <img src={UFLogo} alt="logo" />
      </div>

      {/* timer and score */}
      <div className="mobile_timer_score">
        {/* score */}
        <div className="score_class">
          <PiFlagCheckeredFill />
          <div>
            Score <span>{score}</span>
          </div>
        </div>

        {/* timer */}
        <div className="timer_class">
          <TfiTimer />
          {`${minutes}`.padStart(2, 0)} : {`${seconds}`.padStart(2, 0)}
        </div>
      </div>

      {/* next word to drop */}
      <div className="mobile_next_word">
      Current word :<span>{currentWord}</span>
      </div>
    </MobileWrapper>
  );
};

const MobileWrapper = styled.div`
  padding: 30px;

  & .mobile_timer_score {
    font-size:20px;
    margin-top: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .score_class {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #87cefa;
      text-shadow: 0 0 6px #1cac78;
    }

    & .timer_class {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #1cac78;
      text-shadow: 0 0 6px #87cefa;
    }
  }

  & .mobile_next_word {
    margin-top: 20px;
    text-align: center;
    padding: 12px;
    border-top: 1px solid #1cac78;
    border-bottom: 1px solid #1cac78;
    border-radius:5px;
    background-color: rgba(144,238,144,0.09);
    background-blend-mode: screen;
    color: #fff;

    & span{
        color: #1cac78;
    }
  }
`;
