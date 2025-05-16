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
  #items: Map<string, Item> = new Map();

  /**
   * Create new JSON Feed
   *
   * @param info info of feed
   */
  constructor(info: FeedInfo) {
    this.#info = info;
  }

  /**
   * Get item from feed
   *
   * @param itemId ID of feed item
   * @returns item or undefined if not found
   */
  get(itemId: string): Item | undefined {
    return this.#items.get(itemId);
  }

  /**
   * Check if item is in feed
   *
   * @param itemId ID of feed item
   * @returns `true` if item is in feed, `false` otherwise
   */
  has(itemId: string): boolean {
    return this.#items.has(itemId);
  }

  /**
   * Add items to feed
   *
   * - first will be at top of feed, last at bottom
   *
   * @param items items to add
   * @throws {Error} if item with same ID is already in feed
   */
  add(...items: Item[]): void {
    for (const item of items) {
      const itemId = item.id;

      if (this.#items.has(itemId)) {
        throw new Error(`Item with ID '${itemId}' is already in feed`);
      }

      this.#items.set(itemId, item);
    }
  }

  /**
   * Remove item from feed
   *
   * @param itemId ID of feed item
   * @returns `true` if item existed and has been removed, `false` if item doesn't exist
   */
  remove(itemId: string): boolean {
    return this.#items.delete(itemId);
  }

  /**
   * Serialize feed
   *
   * @returns JSON of feed
   */
  toJSON(): string {
    return JSON.stringify({
      version: this.#version,
      ...this.#info,
      items: Array.from(this.#items.values()),
    });
  }
}
