import { Grid } from "@mui/material";
import { Systeminformation } from "systeminformation";

export default function CoreBoard({
  cpu,
}: {
  cpu: Systeminformation.CurrentLoadCpuData;
}) {
  return <Grid container direction="column" alignItems="center"></Grid>;
}
