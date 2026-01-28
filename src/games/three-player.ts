import { GameChoice } from "./choices.js";

export type ThreePlayerGameResult =
  | "firstWins"
  | "secondWins"
  | "thirdWins"
  | "tie";

export class ThreePlayerGame {
  public playRound(
    firstChoice: GameChoice | null,
    secondChoice: GameChoice | null,
    thirdChoice: GameChoice | null,
  ): void {
    throw new Error("TODO");
  }

  public getResult(): ThreePlayerGameResult {
    throw new Error("TODO");
  }
}
