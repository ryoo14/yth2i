import { assertEquals } from "@std/assert"
import $ from "@david/dax"

Deno.test("convert userName to channelID", async () => {
  const result = await $`deno run --allow-net main.ts https://www.youtube.com/@AmaneKanata`.text()
  assertEquals(result, "UCZlDXzGoo7d44bwdNObFacg")
})
