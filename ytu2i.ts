import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm.ts";

if (Deno.args.length !== 1) {
  console.error("Pleases input only one args.");
  Deno.exit(1);
}

// only support "https://www.youtube.com/@username"
// TODO: validate user input
const url = Deno.args[0];

try {
  const res = await fetch(url);
  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, "text/html");

  // channel_id is contained within the element of the element below.
  // <link rel="alternate" type="application/rss+xml" title="RSS" href="https://www.youtube.com/feeds/videos.xml?channel_id=xxxx">
  const channelIdUrl = doc.querySelector("link[title='RSS']")?.getAttribute("href");

  console.log(channelIdUrl.split("=")[1]);
} catch (e) {
  console.error(e.message);
}
