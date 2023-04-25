import INetType from "../common/INetType";
import IGetter from "./IGetters";

export default abstract class NetworkGetter extends IGetter {
  public static async AllInfo(
    os: typeof import("os"),
    sys: typeof import("systeminformation")
  ): Promise<INetType> {
    const [uuid, netInterface, netConnects, wifiNets] = await Promise.all([
      sys.uuid(),
      sys.networkInterfaces(),
      sys.networkConnections(),
      sys.wifiNetworks(),
    ]);
    return {
      uuid: uuid,
      networkInterface: netInterface,
      networkConnections: netConnects,
      wifiNetworks: wifiNets,
    };
  }
}
