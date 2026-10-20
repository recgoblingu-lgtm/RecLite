import { Hono } from "hono";
import { ClubService } from "../services/clubs";

const clubs = new Hono();

clubs.get("/v1/list", (c) => {
  return c.json(ClubService.getAllClubs(), 200);
});

export default clubs;
