export default abstract class IGetter {
  protected abstract AllInfo: (
    os: typeof import("os"),
    sys: typeof import("systeminformation")
  ) => any;
}
