import { Hono } from "hono";
import { DataImporter } from "../services/dataImporter";

const importer = new Hono();

importer.post("/v1/import/room", async (c) => {
  try {
    const rawBody = await c.req.text();
    const importedRoom = DataImporter.importRoomFromJson(rawBody);
    return c.json({ success: true, room: importedRoom }, 200);
  } catch (error) {
    return c.json({ success: false, error: "Failed to parse and import room JSON payload." }, 400);
  }
});

importer.post("/v1/import/item", async (c) => {
  try {
    const rawBody = await c.req.text();
    const importedItem = DataImporter.importItemFromJson(rawBody);
    return c.json({ success: true, item: importedItem }, 200);
  } catch (error) {
    return c.json({ success: false, error: "Failed to parse and import item JSON payload." }, 400);
  }
});

export default importer;
