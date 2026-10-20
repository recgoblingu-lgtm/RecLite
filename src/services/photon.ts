export class PhotonService {
  public static getNodeAssignment(clientVersion: string) {
    return {
      Address: "127.0.0.1",
      Port: 5056,
      Token: `photon_token_${clientVersion}_${Date.now()}`,
      Region: "us-east",
      AppId: "reclite-photon-app"
    };
  }
}
