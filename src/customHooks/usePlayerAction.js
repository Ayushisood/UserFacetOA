import { useState, useCallback, useContext } from 'react';

import { WORDS, randomWordGenerator } from '../utils/words';
import wordContext from '../utils/context';


export const usePlayerAction = () => {
  const {setCurrentWord} = useContext(wordContext);
  const [playerState, setPlayerState] = useState({
    pos: { x: 0, y: 0 },
    word: WORDS[0].word,
    collided: false,
  });

  //update player position
  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayerState(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

//reset player position from top
const resetPlayerState = useCallback(() => {
  const newWord = randomWordGenerator().word;
  setPlayerState({
    pos: { x: 30 / 2 - 3, y: 0 },
    word: newWord,
    collided: false,
  });
  setCurrentWord(newWord[0].join(''));
}, [setCurrentWord]);

  return [playerState, updatePlayerPos, resetPlayerState];
};