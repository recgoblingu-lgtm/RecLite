import { Hono } from "hono";
import { CatalogService } from "../services/catalog";

const catalog = new Hono();

catalog.get("/v1/all", (c) => {
  return c.json(CatalogService.getAllItems(), 200);
});

catalog.get("/v1/item/:id", (c) => {
  const id = Number(c.req.param("id"));
  const item = CatalogService.getItemById(id);
  if (!item) {
    return c.json({ error: "Item not found" }, 404);
  }
  return c.json(item, 200);
});

export default catalog;
