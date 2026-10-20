import { Hono } from "hono";
import { PhotonService } from "../services/photon";

const photon = new Hono();

photon.all("/v1/connection", (c) => {
  const clientVersion = c.req.query("version") || "2026";
  const nodeConfig = PhotonService.getNodeAssignment(clientVersion);
  return c.json(nodeConfig, 200);
});

export default photon;
