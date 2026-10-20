import { Hono } from "hono";
import { ProgressionService } from "../services/progression";

const progression = new Hono();

progression.get("/v1/challenges", (c) => {
  return c.json(ProgressionService.getChallenges(), 200);
});

export default progression;
