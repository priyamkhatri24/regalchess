const jsChess = require("js-chess-engine");
const { move } = require("js-chess-engine");

export async function getMoveForParticularPgn(previousFen, pgn) {
  const previousState = new jsChess.status(previousFen);

  return await generateMove(previousState, pgn, previousFen);
}

const generateMove = async (previousState, pgn, previousFen) => {
  const lengthOfPgn = pgn.length;
  if (lengthOfPgn == 2) {
    return findPawnSimpleMove(previousState, pgn);
  }
  if (lengthOfPgn > 2) {
    if (pgn.toLowerCase() === "o-o") {
      return findShortCastelingMove(previousState, pgn);
    } else if (pgn.toLowerCase() === "o-o-o") {
      return findLongCastelingMove(previousState, pgn);
    } else {
      return await findPieceMoveExceptPawn(previousState, previousFen, pgn);
    }
  }
};

const findPawnSimpleMove = async (previousState, pgn) => {
  pgn = pgn.toUpperCase();
  if (previousState.turn === "white") {
    let checkPawnPostion = `${pgn[0]}${parseInt(pgn[1]) - 1}`;

    if ((await previousState.pieces[checkPawnPostion]) === "P") {
      return { from: checkPawnPostion, to: pgn };
    } else
      return {
        from: `${pgn[0]}${parseInt(pgn[1]) - 2}`.toUpperCase(),
        to: pgn.toUpperCase(),
      };
  } else {
    let checkPawnPostion = `${pgn[0]}${parseInt(pgn[1]) + 1}`;

    if ((await previousState.pieces[checkPawnPostion]) === "p") {
      return { from: checkPawnPostion, to: pgn };
    } else
      return {
        from: `${pgn[0]}${parseInt(pgn[1]) + 2}`.toUpperCase(),
        to: pgn.toUpperCase(),
      };
  }
};

const findPieceMoveExceptPawn = async (previousState, previousFen, pgn) => {
  if (pgn[0] == "d") {
    pgn = pgn.replace("d", "p");
  }
  if (pgn[0] == "D") {
    pgn = pgn.replace("D", "P");
  }

  const lengthOfPgn = pgn.length;

  if (previousState.turn === `black`) {
    pgn = await pgn.toLowerCase();
  } else {
    pgn = await pgn.toUpperCase();
  }

  for (let key in previousState.pieces) {
    if (previousState.pieces[key] === pgn[0]) {
      try {
        if (
          move(previousFen, key, pgn.substring(lengthOfPgn - 2).toUpperCase())
        ) {
          return {
            from: key,
            to: pgn.substring(lengthOfPgn - 2).toUpperCase(),
          };
        }
      } catch (error) {}
    }
  }
};

const findShortCastelingMove = (previousState, pgn) => {
  if (previousState.turn === "white") {
    return { from: "E1", to: "g1" };
  } else {
    return { from: "E8", to: "g8" };
  }
};

const findLongCastelingMove = (previousState, pgn) => {
  if (previousState.turn === "white") {
    return { from: "E1", to: "C1" };
  } else {
    return { from: "E8", to: "C8" };
  }
};
