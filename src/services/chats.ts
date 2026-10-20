import { ChatMessage } from "../types";

export class ChatService {
  private static messages: ChatMessage[] = [];

  public static postMessage(msg: ChatMessage): void {
    this.messages.push(msg);
  }

  public static getMessagesForUser(userId: number): ChatMessage[] {
    return this.messages.filter(m => m.recipientId === userId || m.senderId === userId);
  }
}
