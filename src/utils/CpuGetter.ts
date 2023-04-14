import Constants from "../common/Constants";
import ICpuType from "../common/ICpuType";

export default abstract class CpuGetter {
  private static async _getUsePerc(
    osUtils: typeof import("node-os-utils")
  ): Promise<number> {
    let cpuUsePerc: number = 0;
    const cpuGrab = osUtils.cpu
      .usage()
      .then((data) => {
        cpuUsePerc = data;
      })
      .catch((err) => {
        throw new Error(Constants.CpuCantRetrived);
      });
    await cpuGrab;
    return cpuUsePerc;
  }
  public static async AllInfo(
    os: typeof import("os"),
    sys: typeof import("systeminformation"),
    osUtils: typeof import("node-os-utils")
  ): Promise<ICpuType> {
    const [system, cpu, usePerc, freq] = await Promise.all([
      sys.system(),
      sys.cpu(),
      this._getUsePerc(osUtils),
      sys.cpuCurrentSpeed(),
    ]);
    return {
      cpuGenData: cpu,
      systemData: system,
      currentFreq: freq.avg,
      usagePerc: usePerc,
      arch: os.arch(),
    };
  }
}
