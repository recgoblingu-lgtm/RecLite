import { Hono } from "hono";

const images = new Hono();

images.get("/v1/:imageName", (c) => {
  const imageName = c.req.param("imageName");
  return c.text(`Proxy asset resolver mapping for file: ${imageName}`, 200);
});

export default images;
