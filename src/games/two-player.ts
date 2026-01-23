import { GameChoice } from "./choices.js";

export type TwoPlayerGameResult = "firstWins" | "secondWins" | "tie";

export class TwoPlayerGame {
  play(firstChoice: GameChoice, secondChoice: GameChoice): TwoPlayerGameResult {
    if (firstChoice === secondChoice) {
      return "tie";
    }

    if (
      (firstChoice === "rabbit" && secondChoice === "carrot") ||
      (firstChoice === "carrot" && secondChoice === "pistol") ||
      (firstChoice === "pistol" && secondChoice === "rabbit")
    ) {
      return "firstWins";
    } else {
      return "secondWins";
    }
  }
}
