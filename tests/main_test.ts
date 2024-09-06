import { assertEquals } from "@std/assert";
import { Feed } from "../src/main.ts";

const VERSION = "https://jsonfeed.org/version/1.1";

const INFO = {
  title: "My Example Feed",
  home_page_url: "https://example.org",
  feed_url: "https://example.org/feed.json",
};

Deno.test("minimal", () => {
  const feed = new Feed(INFO);

  assertEquals(
    feed.toJSON(),
    JSON.stringify({
      version: VERSION,
      ...INFO,
      items: [],
    }),
  );
});
