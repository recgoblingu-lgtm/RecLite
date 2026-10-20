import { InventoryItem } from "../types";
import { CatalogService } from "./catalog";

export class InventoryService {
  private static playerInventories: Map<number, Set<number>> = new Map([
    [1, new Set([1, 2, 3, 4, 5])]
  ]);

  public static getInventoryForPlayer(accountId: number): InventoryItem[] {
    const itemIds = this.playerInventories.get(accountId) || new Set([2]);
    const catalog = CatalogService.getAllItems();
    return catalog.filter((item) => itemIds.has(item.itemId));
  }

  public static addItemToPlayer(accountId: number, itemId: number): boolean {
    if (!this.playerInventories.has(accountId)) {
      this.playerInventories.set(accountId, new Set());
    }
    this.playerInventories.get(accountId)!.add(itemId);
    return true;
  }
}
