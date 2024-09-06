import { Feed } from "../src/main.ts";
import { assertEquals } from "@std/assert";

Deno.test("minimal", () => {
  const info = {
    title: "My Example Feed",
    home_page_url: "https://example.org",
    feed_url: "https://example.org/feed.json",
  };

  const feed = new Feed(info);

  const version = "https://jsonfeed.org/version/1.1";
  const items = [] as const;
  const expected = {
    version,
    ...info,
    items,
  }

  assertEquals(feed.toJSON(), JSON.stringify(expected));
})
