import ICpuType from "../common/ICpuType";
import IGetter from "./IGetters";

export default abstract class CpuGetter extends IGetter {
  public static async AllInfo(
    os: typeof import("os"),
    sys: typeof import("systeminformation")
  ): Promise<ICpuType> {
    const [system, cpu, usePerc] = await Promise.all([
      sys.system(),
      sys.cpu(),
      sys.currentLoad(),
    ]);
    return {
      cpuGenData: cpu,
      systemData: system,
      usagePerc: usePerc,
      arch: os.arch(),
    };
  }
}
