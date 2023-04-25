import { Paper, Grid, Typography } from "@mui/material";
import { Systeminformation } from "systeminformation";
import { StyledBoxPaper } from "../../common/StyledPaper";

export default function NetworkInterfaces({
  netInterface,
}: {
  netInterface:
    | Systeminformation.NetworkInterfacesData
    | Systeminformation.NetworkInterfacesData[];
}) {
  if (!Array.isArray(netInterface)) {
    netInterface = [netInterface];
  }
  return (
    <Paper>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        direction="row"
        padding={2}
        spacing={4}
      >
        {netInterface.map((x, index, array) => (
          <Grid item width={index - 1 === array.length ? "100%" : "50%"}>
            <StyledBoxPaper>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                padding={1}
                //spacing={3}
              >
                <Grid item>
                  <Typography fontSize={25} variant="subtitle2">
                    {x.iface}
                  </Typography>
                </Grid>
              </Grid>
            </StyledBoxPaper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
