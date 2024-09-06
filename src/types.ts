/**
 * Author of a feed or item
 */
export interface Author {
  /** The author's name */
  name?: string;
  /** The URL of a site owned by the author */
  url?: string;
  /** The URL for an image for the author */
  avatar?: string;
}

/**
 * Hub for real-time notifications
 */
export interface Hub {
  /** The protocol used to talk with the hub */
  type: string;
  /** The URL of the hub */
  url: string;
}

/**
 * Item with HTML and/or plain text content
 */
export type Item = HTMLItem | TextItem | (HTMLItem & TextItem);

/**
 * Item with HTML content
 */
export interface HTMLItem extends BaseItem {
  /** HTML content of the item */
  content_html: string;
}

/**
 * Item with plain text content
 */
export interface TextItem extends BaseItem {
  /** Plain text content of the item */
  content_text: string;
}

/**
 * Base item
 */
export interface BaseItem {
  /** Unique identifier for the item, e.g. `url` */
  id: string;
  /** URL of the resource described by the item */
  url?: string;
  /** URL of a page elsewhere */
  external_url?: string;
  /** Title of the item */
  title?: string;
  /** Summary of the item */
  summary?: string;
  /** URL of the main image for the item */
  image?: string;
  /** URL of an image to use as a banner */
  banner_image?: string;
  /** Date the item was published in RFC 3339 format, e.g. `2010-02-07T14:04:00-05:00` */
  date_published?: string;
  /** Date the item was modified in RFC 3339 format, e.g. `2010-02-07T14:04:00-05:00` */
  date_modified?: string;
  /** Authors of the item */
  authors?: Author[];
  /** Tags associated with the item */
  tags?: string[];
  /** Language of the item in RFC 5646 format, e.g. `en` or `en-US` */
  language?: string;
  /** Attachments associated with the item */
  attachments?: Attachment[];
}

/**
 * Related resource of an item
 */
export interface Attachment {
  /** The URL of the attachment */
  url: string;
  /** The MIME type of the attachment */
  mime_type: string;
  /** A name for the attachment */
  title?: string;
  /** The size of the attachment in bytes */
  size_in_bytes?: number;
  /** The duration of the attachment in seconds */
  duration_in_seconds?: number;
}

/**
 * Information of a JSON feed
 */
export interface FeedInfo {
  /** The name of the feed */
  title: string;
  /** The URL of the resource that the feed describes */
  home_page_url: string;
  /** The URL of the feed */
  feed_url: string;
  /** Description of the feed */
  description?: string;
  /** Description of the purpose of the feed, ignored by the feed reader */
  user_comment?: string;
  /** URL of the next page of the feed for pagination, different from `feed_url` to avoid infinite loops */
  next_url?: string;
  /** URL of an image for the feed */
  icon?: string;
  /** URL of a favicon for the feed */
  favicon?: string;
  /** Authors of the feed */
  authors?: Author[];
  /** Primary language for the feed in RFC 5646 format, e.g. `en` or `en-US` */
  language?: string;
  /** Whether the feed is finished and won't ever update */
  expired?: boolean;
  /** Endpoints for real-time notifications */
  hubs?: Hub[];
}
