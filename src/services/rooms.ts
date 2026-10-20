import { RoomData } from "../types";
import defaultRooms from "../../data/default_rooms.json";

export class RoomService {
  private static rooms: Map<number, RoomData> = new Map(
    (defaultRooms as RoomData[]).map((room) => [room.roomId, room])
  );

  public static getRooms(): RoomData[] {
    return Array.from(this.rooms.values());
  }

  public static getRoom(roomId: number): RoomData | undefined {
    return this.rooms.get(roomId);
  }

  public static saveRoom(room: RoomData): void {
    this.rooms.set(room.roomId, room);
  }
}
