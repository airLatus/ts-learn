enum Color {
  HEART = "♥️",
  SPADE = "♣️",
  CLUB = "♦️",
  DIAMOND = "♠️",
}

enum Mark {
  A = "A",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SEVEN = "7",
  EIGHT = "8",
  NINE = "9",
  TEN = "10",
  ELEVEN = "J",
  TWELVE = "Q",
  KING = "K",
}

type NormalCard = {
  color: Color;
  mark: Mark;
};

type Deck = NormalCard[];

function createDeck(): Deck {
  const deck: Deck = [];
  const marks = Object.values(Mark);
  const colors = Object.values(Color);
  for (const m of marks) {
    for (const c of colors) {
      deck.push({
        color: c,
        mark: m,
      });
    }
  }
  return deck;
}

function printDeck(deck: Deck) {
  let result = "\n";
  deck.forEach((card, i) => {
    let str = card.color + card.mark;
    result += str + "\t";
    if ((i + 1) % 4 === 0) {
      result += "\n";
    }
    console.log(result);
  });
}

const deck = createDeck();
printDeck(deck);
