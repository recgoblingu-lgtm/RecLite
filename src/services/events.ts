import { GameEvent } from "../types";

export class EventService {
  private static events: GameEvent[] = [
    {
      eventId: 1,
      title: "RecLite Grand Opening 2026",
      description: "Celebrating full compatibility across all 2025 and 2026 Rec Room clients.",
      startTime: "2026-01-01T00:00:00Z",
      endTime: "2026-12-31T23:59:59Z",
      hostId: 1,
      roomID: 1
    }
  ];

  public static getEvents(): GameEvent[] {
    return this.events;
  }

  public static addEvent(newEvent: GameEvent): void {
    this.events.push(newEvent);
  }
}
