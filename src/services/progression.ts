import { Challenge } from "../types";

export class ProgressionService {
  private static challenges: Challenge[] = [
    { challengeId: 1, title: "Play a game of Laser Tag", rewardTokens: 250, isCompleted: false },
    { challengeId: 2, title: "Cheer 3 different players", rewardTokens: 100, isCompleted: true },
    { challengeId: 3, title: "Import a custom room into RecLite", rewardTokens: 500, isCompleted: false }
  ];

  public static getChallenges(): Challenge[] {
    return this.challenges;
  }
}
