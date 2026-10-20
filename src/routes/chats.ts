import { Hono } from "hono";
import { ChatService } from "../services/chats";

const chats = new Hono();

chats.get("/v1/history", (c) => {
  const userId = Number(c.req.query("userId")) || 1;
  return c.json(ChatService.getMessagesForUser(userId), 200);
});

export default chats;
