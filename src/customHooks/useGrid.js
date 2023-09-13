import { useState, useEffect } from "react";
import { createGridStage } from "../utils/helper"
import { PHRASES } from "../utils/words";

export const useGrid = (playerState, resetPlayerState) => {
  const [gridState, setGridState] = useState(createGridStage());
  const [phrasesFormed, setPhrasesFormed] = useState(0);

  // concat cells characters to form a string
  const joinCells = (row) => {
    let sum = "";
    for (let i = 0; i < row.length; ++i) {
      sum = sum + row[i][0];
    }
    return sum;
  };

 // shift values downwards when a phrase is found and removed
  const dropAboveEntries = (stage, index, start, end) => {
    let update = [...stage];
    for (let i = stage.length-1; i >= 0; i--) {
      for (let j = 0; j < stage[i].length; j++) {
        if (i < index && i >= 0 && j >= start && j <= end ) {
          update[i+1][j] = [
            update[i][j][0],
            update[i][j][1],
            update[i][j][2],
        ];
        }
      }
    }
    return update;
  }

  useEffect(() => {
    setPhrasesFormed(0);
    // clear row if sentence is formed
    const clearWords = (newStage) => {
      let matchedRow = -1
      let startIdx = -1
      let endIdx = -1;
      const updatedStage = newStage.map((row, rowIdx) => {
        let newRow = row;
        PHRASES.forEach((phrase) => {
          const index = joinCells(row).indexOf(phrase);
          if (index !== -1) {
            matchedRow = rowIdx;
            startIdx = index;
            endIdx = index+phrase.length-1;
            setPhrasesFormed(prev => prev + 1);
            newRow = row.map((cell, idx) =>
              idx < index + phrase.length && idx >= index
                ? [0, "empty", 0]
                : cell
            );
          }
        });
        return newRow;
      });
      //   console.log(updatedStage);
      if (matchedRow !== -1) {
        return dropAboveEntries(updatedStage, matchedRow, startIdx, endIdx);
      }
      return updatedStage;
    };

    const updateStage = (prevStage) => {
      // First flush the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "empty" ? [0, "empty", 0] : cell))
      );

      // Then dsiplay the word
      playerState.word.forEach((row, y) => {
        row.forEach((value, x) => {
          newStage[y + playerState.pos.y][x + playerState.pos.x] = [
            value,
            `${playerState.collided ? "merged" : "empty"}`,
            row.join(""),
          ];
        });
      });
      // Then check if we got some score if collided
      if (playerState.collided) {
        resetPlayerState();
        return clearWords(newStage);
      }
      return newStage;
    };

    // Here are the updates
    setGridState((prev) => updateStage(prev));
  }, [playerState.collided, playerState.pos.x, playerState.pos.y, playerState.word, resetPlayerState]);

  return [gridState, setGridState, phrasesFormed];
};
