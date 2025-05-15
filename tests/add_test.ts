import { assertEquals, assertThrows } from "@std/assert";
import { Feed } from "../src/main.ts";

const VERSION = "https://jsonfeed.org/version/1.1";

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

Deno.test("one", () => {
  const feed = new Feed(INFO);

  feed.add(ITEM1);

  assertEquals(
    feed.toJSON(),
    JSON.stringify({
      version: VERSION,
      ...INFO,
      items: [ITEM1],
    }),
  );
});

Deno.test("two", () => {
  const feed = new Feed(INFO);

  feed.add(ITEM1);
  feed.add(ITEM2);

  assertEquals(
    feed.toJSON(),
    JSON.stringify({
      version: VERSION,
      ...INFO,
      items: [ITEM1, ITEM2],
    }),
  );
});

Deno.test("two single call", () => {
  const feed = new Feed(INFO);

  feed.add(ITEM1, ITEM2);

  assertEquals(
    feed.toJSON(),
    JSON.stringify({
      version: VERSION,
      ...INFO,
      items: [ITEM1, ITEM2],
    }),
  );
});

Deno.test("three", () => {
  const feed = new Feed(INFO);

  feed.add(ITEM1);
  feed.add(ITEM2);
  feed.add(ITEM3);

  assertEquals(
    feed.toJSON(),
    JSON.stringify({
      version: VERSION,
      ...INFO,
      items: [ITEM1, ITEM2, ITEM3],
    }),
  );
});

Deno.test("three single call", () => {
  const feed = new Feed(INFO);

  feed.add(ITEM1, ITEM2, ITEM3);

  assertEquals(
    feed.toJSON(),
    JSON.stringify({
      version: VERSION,
      ...INFO,
      items: [ITEM1, ITEM2, ITEM3],
    }),
  );
});

Deno.test("duplicate", () => {
  const feed = new Feed(INFO);
  feed.add(ITEM1);

  assertThrows(
    () => feed.add(ITEM1),
    `Item with ID '1' is already in feed`,
  );
});

Deno.test("duplicate single call", () => {
  const feed = new Feed(INFO);

  assertThrows(
    () => feed.add(ITEM1, ITEM1),
    `Item with ID '1' is already in feed`,
  );
});

Deno.test("none", () => {
  const feed = new Feed(INFO);

  feed.add();

  assertEquals(
    feed.toJSON(),
    JSON.stringify({
      version: VERSION,
      ...INFO,
      items: [],
    }),
  );
});
