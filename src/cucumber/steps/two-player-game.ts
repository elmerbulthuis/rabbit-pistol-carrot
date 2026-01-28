import { Given } from "@cucumber/cucumber";
import * as games from "../../games.js";
import * as hooks from "../hooks.js";

Given(
  "{word} and {word} play the game",
  (firstName: string, secondName: string) => {
    const game = new games.TwoPlayerGame();
    hooks.setGame(game);

    hooks.addPlayer(firstName);
    hooks.addPlayer(secondName);
  },
);
