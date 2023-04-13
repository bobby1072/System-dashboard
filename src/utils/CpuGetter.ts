import ICpuType from "../common/ICpuType";

export default abstract class CpuGetter {
  public static async AllInfo(
    os: typeof import("os"),
    sys: typeof import("systeminformation")
  ): Promise<ICpuType> {
    const [system, cpu] = await Promise.all([sys.system(), sys.cpu()]);
    return {
      cpuGenData: cpu,
      systemData: system,
      cpuInfo: os.cpus(),
      arch: os.arch(),
    } as ICpuType;
  }
}
