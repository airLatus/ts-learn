import { Color, Mark } from "./enums";

export type NormalCard = {
  color: Color;
  mark: Mark;
};

export type Deck = NormalCard[];