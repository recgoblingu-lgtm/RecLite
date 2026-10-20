import { Hono } from "hono";
import { InventoryService } from "../services/inventory";
import { AccountService } from "../services/accounts";

const api = new Hono();

api.get("/inventory/v1/player", (c) => {
  const accountId = Number(c.req.query("accountId")) || 1;
  const inventory = InventoryService.getInventoryForPlayer(accountId);
  return c.json(inventory, 200);
});

api.post("/accounts/v1/sync", async (c) => {
  try {
    const body = await c.req.json<{ username: string; displayName: string }>();
    if (!body.username) {
      return c.json({ error: "Username is required for website account sync." }, 400);
    }
    let existing = AccountService.getAccountByUsername(body.username);
    if (!existing) {
      existing = AccountService.createAccount(body.username, body.displayName || body.username);
    }
    return c.json({ success: true, account: existing }, 200);
  } catch (err) {
    return c.json({ success: false, error: "Invalid synchronization payload format." }, 400);
  }
});

export default api;
