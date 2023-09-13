import { TetrisWrapper } from "./style";
import React, { useEffect, useState } from "react";

import { createGridStage, detectCollision } from "../../utils/helper.js";

// Custom Hooks
import {useInterval} from "../../customHooks/useInterval"
import { usePlayerAction } from "../../customHooks/usePlayerAction";
import { useGrid } from "../../customHooks/useGrid";
import { usePlayerScore } from "../../customHooks/usePlayerScore";

// Components
import { Footer, Navbar, Grid } from "../../components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useTimer } from "../../customHooks/useTimer";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [minutes, seconds] = useTimer();

  const [playerState, updatePlayerPos, resetPlayerState] = usePlayerAction();
  const [gridState, setGridState, phrasesFormed] = useGrid(playerState, resetPlayerState);
  const [score, setScore, cells, setCells] = usePlayerScore(phrasesFormed);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if(minutes <= 0 && seconds <= 0){
        setGameOver(true);
        setDropTime(null);
    }
  }, [minutes, seconds]);

  const movePlayer = (dir) => {
    if (!detectCollision(playerState, gridState, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 40) {
        setDropTime(1000 / (cells + 1));
      }
    }
  };

  const startGame = () => {
    // Reset everything
    setGridState(createGridStage());
    setDropTime(1000);
    resetPlayerState();
    setScore(0);
    setCells(0);
    setGameOver(false);
  };

  const drop = () => {
    if (!detectCollision(playerState, gridState, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (playerState.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTime(null);
    drop();
  };

  // This one starts the game
  // Custom hook by Dan Abramov
  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  };

  return (
    <TetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <Navbar score={score} />
      <Grid stage={gridState} />
      <Footer
        moveDown={() => drop()}
        moveLeft={() => movePlayer(-1)}
        moveRight={() => movePlayer(1)}
        startGame={() => startGame()}
        openHint={() => handleOpen()}
      />
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You have to form one of the below phrases by arranging the word blocks to earn
            <span style={{ color: "green" }}> 10 points for 1 correct phrase formation</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul>
              <li>WE DESIGN AND DEVELOP APPLICATIONS</li>
              <li>THAT RUN THE WORLD AND</li>
              <li>SHOWCASE THE FUTURE</li>
            </ul>
          </Typography>
        </Box>
      </Modal>
      {/* game over modal */}
      <Modal
        open={gameOver}
        onClose={() => setGameOver(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...boxStyle, textAlign: "center"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p style={{ color: "red" }}>GAME OVER!!</p>
            Your current score is: {score}
          </Typography>
        </Box>
      </Modal>
    </TetrisWrapper>
  );
};
