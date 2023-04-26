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
          <Grid item width={array.length === 1 ? "100%" : "50%"}>
            <StyledBoxPaper>
              <Grid
                container
                minHeight="36vh"
                direction="column"
                justifyContent="center"
                alignItems="center"
                padding={1}
                spacing={1}
              >
                <Grid item>
                  <Typography fontSize={30} variant="subtitle2">
                    {x.iface}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography fontSize={18} variant="subtitle2">
                    Device name: {x.ifaceName}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography fontSize={23} variant="subtitle2">
                    MAC address: {x.mac.toUpperCase()}
                  </Typography>
                </Grid>
                {x.ip4 && (
                  <Grid item>
                    <Typography fontSize={23} variant="subtitle2">
                      IPV4: {x.ip4}
                    </Typography>
                  </Grid>
                )}
                <Grid item>
                  <Typography fontSize={25} variant="subtitle2">
                    DHCP: {x.dhcp ? "yes" : "no"}
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
