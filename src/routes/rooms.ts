import { Hono } from "hono";
import { RoomService } from "../services/rooms";

const rooms = new Hono();

rooms.get("/v1/list", (c) => {
  return c.json(RoomService.getRooms(), 200);
});

rooms.get("/v1/details", (c) => {
  const roomId = Number(c.req.query("id")) || 1;
  const room = RoomService.getRoom(roomId);
  if (!room) {
    return c.json({ error: "Room not found" }, 404);
  }
  return c.json(room, 200);
});

export default rooms;
