import { useQuery } from "react-query";
import MainAppBar from "../components/AppBar/AppBar";
import NetworkGetter from "../utils/NetworkGetter";
import { Typography, Grid, Paper } from "@mui/material";
import NetworkInterfaces from "../components/NetworkComponents/NetworkInterfaces";
import INetType from "../common/INetType";
import CloseNetworks from "../components/NetworkComponents/CloseNetworks";
export default function NetworkPage() {
  const { os, sys } = window;
  const {
    error: netError,
    data: netData,
    isLoading: netLoading,
  } = useQuery<INetType>("get-net-info", () => NetworkGetter.AllInfo(os, sys), {
    retryDelay: 500,
    retry: (count) => count < 5,
    refetchInterval: 1,
  });
  return (
    <div>
      <MainAppBar />
      <div
        className="App-header"
        style={netLoading || netError ? { justifyContent: "center" } : {}}
      >
        {netLoading ? (
          <Typography fontSize={50} variant="subtitle2">
            Loading...
          </Typography>
        ) : (
          <div style={{ width: "90%" }}>
            {netData && (
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                width="100%"
                minWidth="30vh"
              >
                <Grid item minHeight="32vh">
                  <Paper>
                    <Grid
                      container
                      spacing={1}
                      padding={3}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography variant="subtitle2" fontSize={45}>
                          Network
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2" fontSize={25}>
                          Physical MAC addresses:
                        </Typography>
                        {netData.uuid.macs.map((x) => (
                          <Typography
                            variant="subtitle2"
                            fontSize={20}
                            textAlign="center"
                          >
                            {x.toUpperCase()}
                          </Typography>
                        ))}
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item>
                  <NetworkInterfaces netInterface={netData.networkInterface} />
                </Grid>
                <Grid item>
                  <CloseNetworks wifiNets={netData.wifiNetworks} />
                </Grid>
              </Grid>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
