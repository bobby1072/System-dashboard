import IGetter from "./IGetters";

export default abstract class BatteryGetter extends IGetter {
  public static async AllInfo(
    os: typeof import("os"),
    sys: typeof import("systeminformation")
  ) {
    const bat = await sys.battery();
    return { battery: bat };
  }
}
