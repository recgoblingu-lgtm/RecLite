import { Hono } from "hono";
import { securityHeaders } from "./middleware/security";
import accountsRoute from "./routes/accounts";
import roomsRoute from "./routes/rooms";
import catalogRoute from "./routes/catalog";
import eventsRoute from "./routes/events";
import clubsRoute from "./routes/clubs";
import chatsRoute from "./routes/chats";
import progressionRoute from "./routes/progression";
import importerRoute from "./routes/importer";
import imagesRoute from "./routes/images";
import photonRoute from "./routes/photon";
import apiRoute from "./routes/api";

const app = new Hono();

app.use("*", securityHeaders);

app.route("/accounts", accountsRoute);
app.route("/rooms", roomsRoute);
app.route("/catalog", catalogRoute);
app.route("/events", eventsRoute);
app.route("/clubs", clubsRoute);
app.route("/chats", chatsRoute);
app.route("/progression", progressionRoute);
app.route("/importer", importerRoute);
app.route("/images", imagesRoute);
app.route("/photon", photonRoute);
app.route("/api", apiRoute);

app.get("/", (c) => {
  return c.text("RecLite Cloud Backend Service is active and online.", 200);
});

export default app;
