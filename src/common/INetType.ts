import { Systeminformation } from "systeminformation";

export default interface INetType {
  uuid: Systeminformation.UuidData;
  networkInterface:
    | Systeminformation.NetworkInterfacesData
    | Systeminformation.NetworkInterfacesData[];
  networkConnections: Systeminformation.NetworkConnectionsData[];
  wifiNetworks: Systeminformation.WifiNetworkData[];
}
