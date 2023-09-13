import { useState, useEffect, useCallback } from 'react';

// cells are reffering to the rows
export const usePlayerScore = phrasesFormed => {
  const [score, setScore] = useState(0);
  const [cells, setCells] = useState(0);

  const calculateScore = useCallback(() => {
    const phrasePoints = [10, 20, 30, 40, 50, 50, 70, 80];
    // We have score
    if (phrasesFormed > 0) {
      // calculated score based on number of phrases formed
      setScore(prev => prev + phrasePoints[phrasesFormed - 1]);
      setCells(prev => prev + phrasesFormed);
    }
  }, [phrasesFormed]);

  useEffect(() => {
    calculateScore();
  }, [calculateScore, phrasesFormed, score]);

  return [score, setScore, cells, setCells];
};