import { DOMParser } from "deno_dom"

if (Deno.args.length !== 1) {
  console.error("Pleases input only one args.")
  Deno.exit(1)
}

try {
  /**
   * The channel URL of the user whose channel id want to extract.
   * only support `https://www.youtube.com/@handle`
   * TODO: validate user input
   */
  const url = Deno.args[0]
  const res = await fetch(url)
  const html = await res.text()
  const doc = new DOMParser().parseFromString(html, "text/html")
  if (doc == null) {
    throw new Error("variable doc is null.")
  }

  /**
   * URL include channel id.
   * It is included in the link tag like the example in.
   * <link rel="alternate" type="application/rss+xml" title="RSS" href="https://www.youtube.com/feeds/videos.xml?channel_id=xxxx">
   */
  const channelIdUrl = doc.querySelector("link[title='RSS']")?.getAttribute("href")

  if (channelIdUrl == null) {
    throw new Error("variable channelIdUrl is null or undefined.")
  }

  /**
   * channel id.
   */
  const channelId = channelIdUrl.split("=")[1]

  console.log(channelId)
} catch (e) {
  console.error(e.message)
}
