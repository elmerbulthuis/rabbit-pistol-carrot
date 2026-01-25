import { Given } from "@cucumber/cucumber";
import * as hooks from "../hooks.js";

Given(
  "{word}, {word} and {word} play the game",
  (firstName: string, secondName: string, thirdName: string) => {
    hooks.addPlayer(firstName);
    hooks.addPlayer(secondName);
    hooks.addPlayer(thirdName);
  },
);
