import { Systeminformation } from "systeminformation";

export default interface ICpuType {
  cpuGenData: Systeminformation.CpuData;
  systemData: Systeminformation.SystemData;
  arch: string;
  usagePerc: Systeminformation.CurrentLoadData;
  opSys: Systeminformation.OsData;
}
