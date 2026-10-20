import { Club } from "../types";

export class ClubService {
  private static clubs: Map<number, Club> = new Map([
    [1, {
      clubId: 1,
      name: "^RecLiteBuilders",
      description: "Official building syndicate for custom servers.",
      ownerId: 1,
      badgeImage: "club_badge.png",
      memberCount: 15
    }]
  ]);

  public static getAllClubs(): Club[] {
    return Array.from(this.clubs.values());
  }

  public static createClub(club: Club): void {
    this.clubs.set(club.clubId, club);
  }
}
