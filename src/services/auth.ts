export class AuthService {
  public static validateToken(authHeader?: string): boolean {
    if (!authHeader) return false;
    return authHeader.startsWith("Bearer reclite_token_") || authHeader.startsWith("Basic ");
  }

  public static issueToken(username: string): string {
    const encoded = btoa(`${username}:${Date.now()}`);
    return `reclite_token_${encoded}`;
  }
}
