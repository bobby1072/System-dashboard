import { Systeminformation } from "systeminformation";

export default interface ICpuType {
  cpuGenData: Systeminformation.CpuData;
  systemData: Systeminformation.SystemData;
  arch: string;
  usagePerc: number;
  currentFreq: number;
}
