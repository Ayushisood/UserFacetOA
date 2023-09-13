import React, { useContext, useEffect, useState } from "react";
import { NavbarWrapper } from "./style";
import UFLogo from "../../assets/images/uf_logo.svg";
import { PiFlagCheckeredFill } from "react-icons/pi";
import { MobileView } from "../MobileView";
import wordContext from "../../utils/context";

export const Navbar = ({score}) => {
  const {currentWord} = useContext(wordContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) setIsMobile(true);
    else setIsMobile(false);
  }, [window.innerWidth]);
  return (
    <>
      {!isMobile ? (
        <NavbarWrapper>
          {/* logo */}
          <div>
            <img src={UFLogo} alt="company-logo" />
          </div>

          {/* Next word  to drop*/}
          <div className="middle_content">
            Current word :<span>{currentWord}</span>
          </div>

          {/* Score */}
          <div className="right_content">
            <PiFlagCheckeredFill />
            <div>
              Score <span>{score}</span>
            </div>
          </div>
        </NavbarWrapper>
      ) : (
        <MobileView  score={score} currentWord={currentWord} />
      )}
    </>
  );
};
