import { Systeminformation } from "systeminformation";

export default interface IMemType {
  memory: Systeminformation.MemData;
  memoryLayout: Systeminformation.MemLayoutData[];
  totalMem: number;
  freeMem: number;
}
