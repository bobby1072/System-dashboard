import { CpuInfo } from "os";
import { Systeminformation } from "systeminformation";

export default interface ICpuType {
  cpuGenData: Systeminformation.CpuData;
  systemData: Systeminformation.SystemData;
  cpuInfo: CpuInfo[];
  arch: string;
}
