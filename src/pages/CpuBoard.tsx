import { useQuery } from "react-query";
import MainAppBar from "../components/AppBar/AppBar";
import { Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ICpuType from "../common/ICpuType";
import CpuGetter from "../utils/CpuGetter";
import CpuTitle from "../components/CpuInformationDisplay/MainGrid";
import CpuDashboardDisplay from "../components/CpuInformationDisplay/DashBoardHome";
export default function CpuBoard() {
  const { os, sys } = window;
  const [allCpuData, setCpuData] = useState<ICpuType[]>([]);
  const {
    isLoading: cpuLoading,
    error: cpuError,
    data: cpuData,
  } = useQuery<ICpuType>("get-cpu-info", () => CpuGetter.AllInfo(os, sys), {
    retryDelay: 1000,
    onSuccess: (data) => {
      setCpuData((_) => {
        return [..._, ...[data]];
      });
    },
    retry: (count) => count < 5,
    refetchInterval: 1,
  });
  useEffect(() => {
    if (allCpuData.length > 51) {
      setCpuData((_) => {
        _.splice(0, 1);
        return _;
      });
    }
    console.log(allCpuData);
  }, [allCpuData]);
  return (
    <div>
      <MainAppBar />
      <div
        className="App-header"
        style={cpuLoading || cpuError ? { justifyContent: "center" } : {}}
      >
        {cpuLoading ? (
          <Typography fontSize={50} variant="subtitle2">
            Loading...
          </Typography>
        ) : (
          <div style={{ width: "90%" }}>
            {cpuData && allCpuData.length > 0 && (
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                width="100%"
              >
                <Grid item>
                  <CpuTitle device={cpuData} />
                </Grid>
                <Grid item>
                  <CpuDashboardDisplay cpuInfo={allCpuData} />
                </Grid>
              </Grid>
            )}
          </div>
        )}
        {!cpuLoading && cpuError ? (
          <Typography variant="subtitle2" fontSize={50}>
            {cpuError instanceof Error ? cpuError.message : "Error..."}
          </Typography>
        ) : null}
      </div>
    </div>
  );
}
