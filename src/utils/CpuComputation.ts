import ICpuType from "../common/ICpuType";
interface ICoresThreads {
  physicalCores: number;
  theoreticalCores: number;
  threads: number;
}
export default abstract class CpuServiceProvider {
  public static CpuCoresAndThreads(data: ICpuType): ICoresThreads {
    const { cpuGenData } = data;
    return {
      physicalCores: cpuGenData.physicalCores,
      theoreticalCores: cpuGenData.cores,
      threads: cpuGenData.cores / cpuGenData.physicalCores,
    };
  }
}
