import { Hono } from "hono";
import { AccountService } from "../services/accounts";

const accounts = new Hono();

accounts.get("/v1/balanced", (c) => {
  const accountId = Number(c.req.query("id")) || 1;
  const account = AccountService.getAccount(accountId);
  if (!account) {
    return c.json({ error: "Account not found" }, 404);
  }
  return c.json(account, 200);
});

accounts.get("/v1/lookup", (c) => {
  const username = c.req.query("username");
  if (!username) {
    return c.json({ error: "Missing username parameter" }, 400);
  }
  const account = AccountService.getAccountByUsername(username);
  if (!account) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json(account, 200);
});

export default accounts;
