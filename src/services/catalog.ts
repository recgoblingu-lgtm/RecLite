import { InventoryItem } from "../types";
import defaultItems from "../../data/default_items.json";

export class CatalogService {
  private static masterCatalog: Map<number, InventoryItem> = new Map(
    (defaultItems as InventoryItem[]).map((item) => [item.itemId, item])
  );

  public static getAllItems(): InventoryItem[] {
    return Array.from(this.masterCatalog.values());
  }

  public static getItemById(id: number): InventoryItem | undefined {
    return this.masterCatalog.get(id);
  }

  public static addItem(item: InventoryItem): void {
    this.masterCatalog.set(item.itemId, item);
  }
}
