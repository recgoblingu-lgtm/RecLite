import { Account } from "../types";
import { CONFIG } from "../config";

export class AccountService {
  private static accounts: Map<number, Account> = new Map([
    [1, {
      accountId: 1,
      username: "Administrator",
      displayName: "RecLite System Admin",
      profileImage: "admin_avatar.png",
      isOnline: true,
      tokenBalance: CONFIG.startingTokens,
      level: 50,
      xp: 45000,
      createdAt: new Date().toISOString()
    }]
  ]);

  private static usernameIndex: Map<string, number> = new Map([
    ["administrator", 1]
  ]);

  public static getAccount(id: number): Account | undefined {
    return this.accounts.get(id);
  }

  public static getAccountByUsername(username: string): Account | undefined {
    const id = this.usernameIndex.get(username.toLowerCase());
    return id !== undefined ? this.accounts.get(id) : undefined;
  }

  public static createAccount(username: string, displayName: string): Account {
    const newId = this.accounts.size + 1;
    const account: Account = {
      accountId: newId,
      username,
      displayName,
      profileImage: "default_profile.png",
      isOnline: true,
      tokenBalance: CONFIG.startingTokens,
      level: 1,
      xp: 0,
      createdAt: new Date().toISOString()
    };
    this.accounts.set(newId, account);
    this.usernameIndex.set(username.toLowerCase(), newId);
    return account;
  }

  public static getAllAccounts(): Account[] {
    return Array.from(this.accounts.values());
  }
}
