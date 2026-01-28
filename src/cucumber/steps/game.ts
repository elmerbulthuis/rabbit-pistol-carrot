import { Then, When } from "@cucumber/cucumber";
import assert from "node:assert";
import * as games from "../../games.js";
import * as hooks from "../hooks.js";

When(
  "{word} picks {string}",
  (playerName: string, playerChoice: games.GameChoice | "") => {
    const game = hooks.getGame();

    if (playerChoice === "") {
      hooks.setPlayerChoice(playerName, null);
    } else {
      hooks.setPlayerChoice(playerName, playerChoice);
    }

    if (game instanceof games.TwoPlayerGame) {
      const [firstName, secondName] = hooks.getTwoPlayerNames();

      if (hooks.getPlayerChoiceCount() === 2) {
        const firstChoice = hooks.getPlayerChoice(firstName);
        const secondChoice = hooks.getPlayerChoice(secondName);

        assert(firstChoice != null);
        assert(secondChoice != null);

        hooks.resetPlayerChoice();

        game.playRound(firstChoice, secondChoice);
      }
    } else if (game instanceof games.ThreePlayerGame) {
      const [firstName, secondName, thirdName] = hooks.getThreePlayerNames();

      if (hooks.getPlayerChoiceCount() === 3) {
        const firstChoice = hooks.getPlayerChoice(firstName);
        const secondChoice = hooks.getPlayerChoice(secondName);
        const thirdChoice = hooks.getPlayerChoice(thirdName);
        hooks.resetPlayerChoice();

        game.playRound(firstChoice, secondChoice, thirdChoice);
      }
    } else {
      assert.fail("Unknown game type");
    }
  },
);

Then("{word} should win", (playerName: string) => {
  const game = hooks.getGame();

  if (game instanceof games.TwoPlayerGame) {
    const [firstName, secondName] = hooks.getTwoPlayerNames();

    const result = game.getResult();

    switch (playerName) {
      case firstName:
        assert.equal(result, "firstWins");
        break;
      case secondName:
        assert.equal(result, "secondWins");
        break;
      default:
        assert.fail(`Player name ${playerName} not found`);
    }
  } else if (game instanceof games.ThreePlayerGame) {
    const [firstName, secondName, thirdName] = hooks.getThreePlayerNames();

    const result = game.getResult();

    switch (playerName) {
      case firstName:
        assert.equal(result, "firstWins");
        break;
      case secondName:
        assert.equal(result, "secondWins");
        break;
      case thirdName:
        assert.equal(result, "thirdWins");
        break;
      default:
        assert.fail(`Player name ${playerName} not found`);
    }
  } else {
    assert.fail("Unknown game type");
  }
});

Then("{word} should lose", (playerName: string) => {
  const game = hooks.getGame();

  if (game instanceof games.TwoPlayerGame) {
    const [firstName, secondName] = hooks.getTwoPlayerNames();

    const result = game.getResult();

    switch (playerName) {
      case firstName:
        assert.notEqual(result, "firstWins");
        break;
      case secondName:
        assert.notEqual(result, "secondWins");
        break;
      default:
        assert.fail(`Player name ${playerName} not found`);
    }
  } else if (game instanceof games.ThreePlayerGame) {
    const [firstName, secondName, thirdName] = hooks.getThreePlayerNames();

    const result = game.getResult();

    switch (playerName) {
      case firstName:
        assert.notEqual(result, "firstWins");
        break;
      case secondName:
        assert.notEqual(result, "secondWins");
        break;
      case thirdName:
        assert.notEqual(result, "thirdWins");
        break;
      default:
        assert.fail(`Player name ${playerName} not found`);
    }
  } else {
    assert.fail("Unknown game type");
  }
});

Then("the game should be a draw", () => {
  const game = hooks.getGame();

  if (game instanceof games.TwoPlayerGame) {
    assert.equal(game.getResult(), "tie");
  } else if (game instanceof games.ThreePlayerGame) {
    assert.fail("Not implemented yet");
  } else {
    assert.fail("Unknown game type");
  }
});
