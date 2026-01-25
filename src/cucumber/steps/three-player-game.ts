import { Given, When } from "@cucumber/cucumber";
import * as hooks from "../hooks.js";

Given(
  "{word}, {word} and {word} play the game",
  (firstName: string, secondName: string, thirdName: string) => {
    hooks.addPlayer(firstName);
    hooks.addPlayer(secondName);
    hooks.addPlayer(thirdName);
  },
);

When(
  "{word} plays againsty {word}",
  (playerName: string, otherPlayerName: string) => {
    // Write code here that turns the phrase above into concrete actions
  },
);
