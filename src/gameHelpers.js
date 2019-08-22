export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[0].length; x++) {
      //1. check we we're on a tertromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          //2 check that we are in the game areas height(y) and the bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          //3. make sure that the tetrimino is not moving outside of the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          //4. Make sure the cell is not set to clear, if it is not clear we are not colliding
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
