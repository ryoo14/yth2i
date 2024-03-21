import { assertEquals } from "https://deno.land/std@0.220.1/assert/mod.ts"
import $ from "https://deno.land/x/dax@0.39.2/mod.ts"

Deno.test("convert userName to channelID", async () => {
  const result = await $`deno run --allow-net ytu2i.ts https://www.youtube.com/@AmaneKanata`.text()
  assertEquals(result, "UCZlDXzGoo7d44bwdNObFacg")
})
