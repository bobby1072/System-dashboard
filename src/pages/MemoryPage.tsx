import { useQuery } from "react-query";
import MainAppBar from "../components/AppBar/AppBar";
import MemoryGetter from "../utils/MemoryGetter";
import { Typography, Grid, Paper } from "@mui/material";
import IMemType from "../common/IMemType";
import StorageIcon from "@mui/icons-material/Storage";
import MemoryStackedBar from "../components/MemoryInformationDisplay/MemoryStackedBar";
import { StyledBoxPaper } from "../common/StyledPaper";
export default function MemoryPage() {
  const { os, sys } = window;
  const {
    isLoading: memLoading,
    data: memData,
    error: memError,
  } = useQuery<IMemType>(
    "get-memory-info",
    () => MemoryGetter.AllInfo(os, sys),
    {
      retryDelay: 500,
      retry: (count) => count < 5,
      refetchInterval: 1,
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
  return (
    <div>
      <MainAppBar />
      <div
        className="App-header"
        style={memLoading || memError ? { justifyContent: "center" } : {}}
      >
        {memLoading ? (
          <Typography fontSize={50} variant="subtitle2">
            Loading...
          </Typography>
        ) : (
          <div style={{ width: "90%" }}>
            {memData && (
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                width="100%"
                minWidth="50vh"
              >
                <Grid item>
                  <Paper>
                    <Grid
                      container
                      justifyContent="center"
                      alignItems="center"
                      textAlign="center"
                      spacing={1}
                      padding={3}
                      direction="column"
                    >
                      <Grid item>
                        <Typography fontSize={45} variant="subtitle2">
                          System RAM {"(Random-Access-Memory)"} Information
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper>
                    <Grid
                      container
                      justifyContent="center"
                      alignItems="center"
                      textAlign="center"
                      direction="row"
                      padding={1}
                      spacing={1}
                    >
                      {memData.memoryLayout.map((x) => (
                        <Grid item>
                          <StyledBoxPaper>
                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                              direction="row"
                              padding={2}
                              spacing={1}
                            >
                              <Grid item sx={{ width: "30%", height: "55%" }}>
                                <StorageIcon
                                  sx={{ width: "100%", height: "100%" }}
                                />
                              </Grid>
                              <Grid item>
                                <Grid container direction="column" spacing={1}>
                                  <Grid item>
                                    <Typography
                                      fontSize={15}
                                      variant="subtitle2"
                                    >
                                      Manufacurer: {x.manufacturer}
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      fontSize={15}
                                      variant="subtitle2"
                                    >
                                      Speed: {x.clockSpeed}
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      fontSize={15}
                                      variant="subtitle2"
                                    >
                                      Type: {x.type}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </StyledBoxPaper>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item>
                  <MemoryStackedBar
                    activeMem={memData.memory.active}
                    totalMem={memData.memory.total}
                  />
                </Grid>
              </Grid>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
