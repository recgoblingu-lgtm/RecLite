import { Context, Next } from "hono";

export async function securityHeaders(c: Context, next: Next) {
  c.header("X-Content-Type-Options", "nosniff");
  c.header("X-Frame-Options", "DENY");
  c.header("X-RecLite-Server-Version", "2026.03");
  c.header("Access-Control-Allow-Origin", "*");
  c.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  c.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-RecNet-Token");
  
  if (c.req.method === "OPTIONS") {
    return c.text("", 204);
  }
  
  await next();
}
