import { GameChoice } from "./choices.js";

export type TwoPlayerGameResult = "playerOneWins" | "playerTwoWins" | "tie";

export class TwoPlayerGame {
  play(
    playerOneChoice: GameChoice,
    player2Choice: GameChoice,
  ): TwoPlayerGameResult {
    if (playerOneChoice === player2Choice) {
      return "tie";
    }

    if (
      (playerOneChoice === "rabbit" && player2Choice === "carrot") ||
      (playerOneChoice === "carrot" && player2Choice === "pistol") ||
      (playerOneChoice === "pistol" && player2Choice === "rabbit")
    ) {
      return "playerOneWins";
    } else {
      return "playerTwoWins";
    }
  }
}
