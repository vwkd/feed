# README

JSON Feed generator



## Features

- spec-compliant
- simple, flexible and fully-typed API
- tiny, zero dependencies



## Usage

```js
import { Feed } from "@vwkd/feed";

const feed = new Feed({
  title: "My Example Feed",
  home_page_url: "https://example.org",
  feed_url: "https://example.org/feed.json",
});

feed.add({
  id: "1",
  content_html: "<p>Hello, world!</p>",
  url: "https://example.org/initial-post",
});

feed.add(
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
);

const json = feed.toJSON();
```



## Resources

- [JSON Feed Version 1.1](https://www.jsonfeed.org/version/1.1/)
