import { Given } from "@cucumber/cucumber";
import * as games from "../../games.js";
import * as hooks from "../hooks.js";

Given(
  "{word}, {word} and {word} play the game",
  (firstName: string, secondName: string, thirdName: string) => {
    const game = new games.ThreePlayerGame();
    hooks.setGame(game);

    hooks.addPlayer(firstName);
    hooks.addPlayer(secondName);
    hooks.addPlayer(thirdName);
  },
);
