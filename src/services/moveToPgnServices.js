const jsChess = require("js-chess-engine");
export async function getPgnForParticularMove(previousFen, newFen, from, to) {
  const previousState = new jsChess.status(previousFen);
  const newState = new jsChess.status(newFen);
  return generatePgn(previousState, from, to);
}

const generatePgn = async (previousState, from, to) => {
  // console.log(previousState);
  const canCastelingBeDone =
    previousState.castling[`${previousState.turn}Short`] ||
    previousState.castling[`${previousState.turn}Long`];
  let isCastelingBeingDone;
  if (canCastelingBeDone) {
    isCastelingBeingDone = await checkIfCastelingIsBeingDone(
      previousState,
      from,
      to
    );
  } else isCastelingBeingDone = 0;
  const pawnMoved = await checkIfPawnMoved(previousState, from);
  const checkPieceCut = await chessPieceCut(previousState, to);
  if (pawnMoved && checkPieceCut) {
    return `cx${to.toLowerCase()}`;
  } else if (pawnMoved) {
    return await to.toLowerCase();
  } else if (checkPieceCut) {
    return `${await previousState.pieces[
      from
    ].toUpperCase()}x${to.toLowerCase()}`;
  } else if (isCastelingBeingDone === 0) {
    return `${await previousState.pieces[
      from
    ].toUpperCase()}${to.toLowerCase()}`;
  } else if (isCastelingBeingDone === 1) {
    return `o-o`;
  } else if (isCastelingBeingDone === 2) {
    return `o-o-o`;
  }
};

const checkIfPawnMoved = async (previousState, from) => {
  if (previousState.pieces[from] === "p" || previousState.pieces[from] === "P")
    return true;
  else return false;
};

const chessPieceCut = async (previousState, to) => {
  if (previousState.pieces[to]) return true;
  else return false;
};
const chessPieceIsKing = async (previousState, from) => {
  if (previousState.pieces[from] === "k" || previousState.pieces[from] === "K")
    return true;
  else return false;
};

const checkIfCastelingIsBeingDone = async (previousState, from, to) => {
  const checkIfPieceIsKing = await chessPieceIsKing(previousState, from);
  let ifShortCastelingIsBeingDone, ifLongCastelingIsBeingDone;
  if (checkIfPieceIsKing) {
    ifShortCastelingIsBeingDone = await checkIfShortCastelingIsBeingDone(
      previousState,
      from,
      to
    );
    ifLongCastelingIsBeingDone = await checkIfLongCastelingIsBeingDone(
      previousState,
      from,
      to
    );
  }
  if (!checkIfPieceIsKing) {
    return 0;
  } else if (ifShortCastelingIsBeingDone) {
    return 1;
  } else if (ifLongCastelingIsBeingDone) {
    return 2;
  }
  return 0;
};

const checkIfShortCastelingIsBeingDone = async (previousState, from, to) => {
  if (
    previousState.castling[`${previousState.turn}Short`] &&
    previousState.turn === "white" &&
    to === "G1"
  ) {
    return true;
  }
  if (
    previousState.castling[`${previousState.turn}Short`] &&
    previousState.turn === "black" &&
    to === "G8"
  ) {
    return true;
  } else return false;
};

const checkIfLongCastelingIsBeingDone = async (previousState, from, to) => {
  if (
    previousState.castling[`${previousState.turn}Long`] &&
    previousState.turn === "white" &&
    to === "C1"
  ) {
    return true;
  }
  if (
    previousState.castling[`${previousState.turn}Long`] &&
    previousState.turn === "black" &&
    to === "C8"
  ) {
    return true;
  } else return false;
};
