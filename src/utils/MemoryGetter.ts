import IMemType from "../common/IMemType";
import IGetter from "./IGetters";

export default abstract class MemoryGetter extends IGetter {
  public static async AllInfo(
    os: typeof import("os"),
    sys: typeof import("systeminformation")
  ): Promise<IMemType> {
    const [mem, memLay] = await Promise.all([sys.mem(), sys.memLayout()]);
    return {
      memory: mem,
      memoryLayout: memLay,
      totalMem: os.totalmem(),
      freeMem: os.freemem(),
    };
  }
}
