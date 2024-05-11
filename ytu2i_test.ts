import { assertEquals } from "std/assert"
import $ from "dax"

Deno.test("convert userName to channelID", async () => {
  const result = await $`deno run --allow-net ytu2i.ts https://www.youtube.com/@AmaneKanata`.text()
  assertEquals(result, "UCZlDXzGoo7d44bwdNObFacg")
})
