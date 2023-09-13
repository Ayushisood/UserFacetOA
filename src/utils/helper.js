export const HEIGHT = 25;
export const WIDTH = 45;

export const createGridStage = () => {
  return Array.from(Array(HEIGHT), () => {
    return new Array(WIDTH).fill([0, "empty", 0]);
  });
};

export const detectCollision = (player, stage, { x: moveX, y: moveY }) => {
  // Using for loops to be able to return (and break). Not possible with forEach
  const word = player.word[0];
  for (let x = 0; x < word.length; x += 1) {
    if (
      // 1. Check that our move is inside the game areas height (y)
      // That we're not going through bottom of the play area
      !stage[player.pos.y + moveY] ||
      // 2. Check that our move is inside the game areas width (x)
      !stage[player.pos.y + moveY][x + player.pos.x + moveX] ||
      // 3. Check that the cell wer'e moving to isn't set to empty
      stage[player.pos.y + moveY][x + player.pos.x + moveX][1] !== "empty"
    ) {
      return true;
    }
  }
  // 5. If everything above is false
  return false;
};
