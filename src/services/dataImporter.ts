import { RoomData, InventoryItem } from "../types";
import { RoomService } from "./rooms";
import { CatalogService } from "./catalog";

export class DataImporter {
  public static importRoomFromJson(rawJsonString: string): RoomData {
    const parsed = JSON.parse(rawJsonString);
    const newRoom: RoomData = {
      roomId: parsed.RoomID || Math.floor(Math.random() * 900000) + 100000,
      name: parsed.Name || "Imported Sandbox Room",
      description: parsed.Description || "Imported via RecLite web synchronization pipeline.",
      creatorId: parsed.CreatorID || 1,
      imageName: parsed.ImageName || "default_room.png",
      setMaxPlayers: parsed.MaxPlayers || 32,
      isLocked: parsed.IsLocked || false,
      publishedAt: new Date().toISOString(),
      dataBlob: parsed
    };
    RoomService.saveRoom(newRoom);
    return newRoom;
  }

  public static importItemFromJson(rawJsonString: string): InventoryItem {
    const parsed = JSON.parse(rawJsonString);
    const newItem: InventoryItem = {
      itemId: parsed.ItemID || Math.floor(Math.random() * 900000) + 10000,
      name: parsed.Name || "Custom Imported Item",
      category: parsed.Category || "Outfit",
      rarity: parsed.Rarity || "Common",
      isGiftable: parsed.IsGiftable ?? true,
      assetBundleHash: parsed.AssetBundleHash || "default_bundle"
    };
    CatalogService.addItem(newItem);
    return newItem;
  }
}
