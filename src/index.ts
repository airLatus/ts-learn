type Color = "♥️" | "♣️" | "♦️" | "♠️";

type NormalCard = {
  color: Color;
  mark: number;
};

type Deck = NormalCard[];

function createDeck(): Deck {
  const deck: Deck = [];
  for (let index = 1; index < 13; index++) {
    deck.push({
      mark: index,
      color: "♠️",
    });
    deck.push({
      mark: index,
      color: "♣️",
    });
    deck.push({
      mark: index,
      color: "♥️",
    });
    deck.push({
      mark: index,
      color: "♦️",
    });
  }
  return deck;
}

function printDeck(deck: Deck) {
  let result = "\n";
  deck.forEach((card, i) => {
    let str = card.color;
    let mark = card.mark;
    if (mark <= 10) {
      str += card.mark;
    } else if (mark === 11) {
      str += "J";
    } else if (mark === 12) {
      str += "Q";
    } else if (mark === 13) {
      str += "K";
    }
    result += str + "\t";
    if ((i + 1) % 4 === 0) {
      result += "\n";
    }
    console.log(result);
  });
}

const deck = createDeck();
printDeck(deck);
