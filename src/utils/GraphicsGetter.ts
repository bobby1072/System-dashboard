import { Systeminformation } from "systeminformation";
import IGetter from "./IGetters";

export default abstract class GraphicsGetter extends IGetter {
  public static async AllInfo(
    os: typeof import("os"),
    sys: typeof import("systeminformation")
  ): Promise<Systeminformation.GraphicsData> {
    const graphs = await sys.graphics();
    return graphs;
  }
}
