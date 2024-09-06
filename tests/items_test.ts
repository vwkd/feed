import { Feed } from "../src/main.ts";
import { assertEquals } from "@std/assert";

Deno.test("three items", () => {
  const info = {
    title: "My Example Feed",
    home_page_url: "https://example.org",
    feed_url: "https://example.org/feed.json",
  };

  const feed = new Feed(info);
  
  const items = [
    {
      id: "1",
      content_html: "<p>Hello, world!</p>",
      url: "https://example.org/initial-post",
    },
    {
      id: "2",
      content_text: "This is a second item.",
      url: "https://example.org/second-item",
    },
    {
      id: "3",
      content_html: "<p>This is a third item.</p>",
      content_text: "This is a third item.",
      url: "https://example.org/third-item",
    },
  ]

  feed.add(...items);

  const version = "https://jsonfeed.org/version/1.1";
  const expected = {
    version,
    ...info,
    items,
  }

  assertEquals(feed.toJSON(), JSON.stringify(expected));
})
