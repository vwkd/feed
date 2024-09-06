export * from "./types.ts";
import type { FeedInfo, Item } from "./types.ts";

/**
 * JSON feed
 */
export class Feed {
  /** The URL of the version of the feed format */
  #version = "https://jsonfeed.org/version/1.1";
  /** Information of the feed */
  #info: FeedInfo;
  /** Items of the feed */
  #items: Item[] = [];

  /**
   * Creates new JSON Feed
   *
   * @param info Feed info
   */
  // todo: validate arguments
  constructor(info: FeedInfo) {
    this.#info = info;
  }

  /**
   * Add one or more items to the feed
   *
   * @param items items to add
   * @throws {Error} if item with same ID was already added
   */
  // todo: validate arguments
  add(...items: Item[]): void {
    for (const item of items) {
      const itemId = item.id;

      if (this.#items.some(({ id }) => id === itemId)) {
        throw new Error(`Item with ID '${itemId}' was already added`);
      }
    }

    this.#items.push(...items);
  }

  /**
   * Get feed as JSON
   *
   * @returns feed as JSON
   */
  toJSON(): string {
    return JSON.stringify({
      version: this.#version,
      ...this.#info,
      items: this.#items,
    });
  }
}
