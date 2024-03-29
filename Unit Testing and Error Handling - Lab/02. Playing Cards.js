function solve(face, suit) {
  const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let validSuit = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  if (validFaces.includes(face) === false) {
    throw new Error(`Invalid face: ${face}`);
  }

  if (validSuit.includes(suit) === false) {
    throw new Error(`Invalid suit: ${suit}`);
  }

  let result = {
    face,
    suits: validSuit[suit],
    toString() {
      return this.face + this.suit;
    },
  };

  return result;
}
solve("A", "S");
