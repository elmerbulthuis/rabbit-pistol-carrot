import { GameChoice } from "./choices.js";

export type TwoPlayerGameResult = "firstWins" | "secondWins" | "tie";

export class TwoPlayerGame {
  private readonly results = new Array<TwoPlayerGameResult>();

  public reset(): void {
    // Reset any game state if necessary
  }

  public playRound(firstChoice: GameChoice, secondChoice: GameChoice): void {
    const result = this.playSingle(firstChoice, secondChoice);
    this.results.push(result);
  }

  public getResult(): TwoPlayerGameResult {
    const [firstWins, secondWins] = this.results.reduce(
      (acc, result) => {
        if (result === "firstWins") {
          acc[0]++;
        } else if (result === "secondWins") {
          acc[1]++;
        }
        return acc;
      },
      [0, 0],
    );

    if (firstWins > secondWins) {
      return "firstWins";
    } else if (secondWins > firstWins) {
      return "secondWins";
    } else {
      return "tie";
    }
  }

  private playSingle(
    firstChoice: GameChoice,
    secondChoice: GameChoice,
  ): TwoPlayerGameResult {
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
