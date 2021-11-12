const jsChess = require("js-chess-engine");

export const findPieceTakenDown = async (previousFen, pgnMove) => {
  //   console.log("pgnMove is");
  //   console.log(pgnMove);
  const pgnMoveLength = await pgnMove.length;
  const previousState = await new jsChess.status(previousFen);
  let to = `${pgnMove[pgnMoveLength - 2]}${pgnMove[pgnMoveLength - 1]}`;
  to = await to.toUpperCase();
  if (previousState.pieces[to]) {
    return previousState.pieces[to];
  } else return null;
};
