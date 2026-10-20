import { Hono } from "hono";
import { EventService } from "../services/events";

const events = new Hono();

events.get("/v1/active", (c) => {
  return c.json(EventService.getEvents(), 200);
});

export default events;
