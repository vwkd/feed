import { assertEquals } from "@std/assert";
import { Feed } from "../src/main.ts";

const INFO = {
  title: "My Example Feed",
  home_page_url: "https://example.org",
  feed_url: "https://example.org/feed.json",
};

const ITEM1 = {
  id: "1",
  content_html: "<p>Hello, world!</p>",
  url: "https://example.org/initial-post",
};

const ITEM2 = {
  id: "2",
  content_text: "This is a second item.",
  url: "https://example.org/second-item",
};

const ITEM3 = {
  id: "3",
  content_html: "<p>This is a third item.</p>",
  content_text: "This is a third item.",
  url: "https://example.org/third-item",
};

Deno.test("first", () => {
  const feed = new Feed(INFO);
  feed.add(ITEM1, ITEM2, ITEM3);

  assertEquals(feed.get(ITEM1.id), ITEM1);
});

Deno.test("second", () => {
  const feed = new Feed(INFO);
  feed.add(ITEM1, ITEM2, ITEM3);

  assertEquals(feed.get(ITEM2.id), ITEM2);
});

Deno.test("third", () => {
  const feed = new Feed(INFO);
  feed.add(ITEM1, ITEM2, ITEM3);

  assertEquals(feed.get(ITEM3.id), ITEM3);
});

Deno.test("non-existent", () => {
  const feed = new Feed(INFO);
  feed.add(ITEM1, ITEM2, ITEM3);

  assertEquals(feed.get("foo"), undefined);
});
