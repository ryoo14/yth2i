import { assertEquals } from "https://deno.land/std@0.211.0/assert/mod.ts";
import $ from "https://deno.land/x/dax@0.36.0/mod.ts";

Deno.test("convert userName to channelID", async () => {
  const result = await $`deno run --allow-net ytu2i.ts https://www.youtube.com/@GoogleJapan`.text();
  assertEquals(result, "UCTnRxVUPssiL7H29ON07t_Q");
});
