import { useQuery } from "react-query";
import MainAppBar from "../components/AppBar/AppBar";
import {
  Typography,
  Grid,
  Paper,
  Divider,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import ICpuType from "../common/ICpuType";
import CpuGetter from "../utils/CpuGetter";
import CpuTitle from "../components/CpuComponents/MainGrid";
import CpuDashboardDisplay from "../components/CpuComponents/DashBoardHome";
import CoreBoard from "../components/CpuComponents/CoreBoard";
import { Systeminformation } from "systeminformation";
function averageLoadCpuData(
  data: Systeminformation.CurrentLoadCpuData[]
): Systeminformation.CurrentLoadCpuData[] {
  const result = [];

  for (let i = 0; i < data.length; i += 2) {
    const {
      load,
      loadUser,
      loadSystem,
      loadNice,
      loadIdle,
      loadIrq,
      rawLoad,
      rawLoadUser,
      rawLoadSystem,
      rawLoadNice,
      rawLoadIdle,
      rawLoadIrq,
    } = data[i];

    const nextData = data[i + 1];

    const avgItem = {
      load: (load + (nextData?.load || 0)) / 2,
      loadUser: (loadUser + (nextData?.loadUser || 0)) / 2,
      loadSystem: (loadSystem + (nextData?.loadSystem || 0)) / 2,
      loadNice: (loadNice + (nextData?.loadNice || 0)) / 2,
      loadIdle: (loadIdle + (nextData?.loadIdle || 0)) / 2,
      loadIrq: (loadIrq + (nextData?.loadIrq || 0)) / 2,
      rawLoad: (rawLoad + (nextData?.rawLoad || 0)) / 2,
      rawLoadUser: (rawLoadUser + (nextData?.rawLoadUser || 0)) / 2,
      rawLoadSystem: (rawLoadSystem + (nextData?.rawLoadSystem || 0)) / 2,
      rawLoadNice: (rawLoadNice + (nextData?.rawLoadNice || 0)) / 2,
      rawLoadIdle: (rawLoadIdle + (nextData?.rawLoadIdle || 0)) / 2,
      rawLoadIrq: (rawLoadIrq + (nextData?.rawLoadIrq || 0)) / 2,
    };

    result.push(avgItem);
  }

  return result;
}
export default function CpuBoard() {
  const { os, sys } = window;
  const [allCpuData, setCpuData] = useState<ICpuType[]>([]);
  const [allCores, setAllCores] = useState<boolean>(false);
  const [coreIndex, setCoreIndex] = useState<number>();
  const {
    isLoading: cpuLoading,
    error: cpuError,
    data: cpuData,
  } = useQuery<ICpuType>("get-cpu-info", () => CpuGetter.AllInfo(os, sys), {
    retryDelay: 500,
    onSuccess: (data) => {
      setCpuData((_) => {
        return [..._, ...[data]];
      });
    },
    retry: (count) => count < 5,
    refetchInterval: 1,
  });
  useEffect(() => {
    if (allCpuData.length > 31) {
      setCpuData((_) => {
        _.splice(0, 1);
        return _;
      });
    }
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
                minWidth="50vh"
              >
                <Grid item>
                  <CpuTitle device={cpuData} />
                </Grid>
                <Grid item>
                  <CpuDashboardDisplay cpuInfo={allCpuData} />
                </Grid>
                <Grid item alignItems="center" justifyContent="center">
                  <Paper>
                    <Grid
                      container
                      direction="row"
                      padding={2}
                      width="100%"
                      minWidth="36vh"
                    >
                      <Grid item>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={allCores}
                              onChange={() => {
                                if (allCores) {
                                  setAllCores(false);
                                } else {
                                  setAllCores(true);
                                }
                              }}
                            />
                          }
                          label="Show performance cores"
                        />
                      </Grid>
                    </Grid>
                    <Divider />
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      padding={2}
                      spacing={2.5}
                      minWidth="36vh"
                      width="100%"
                    >
                      {allCores
                        ? allCpuData[allCpuData.length - 1].usagePerc.cpus.map(
                            (x, index) => (
                              <Grid item width="50%" minWidth="18vh">
                                <CoreBoard
                                  coreIndex={index}
                                  setIndex={(num?: number) => {
                                    setCoreIndex(num);
                                  }}
                                  selectedIndex={coreIndex}
                                  allCpuData={allCpuData.map((deepX) => {
                                    return deepX.usagePerc.cpus.find(
                                      (cpuFinder, cpuIndex) =>
                                        cpuIndex === index
                                    )!;
                                  })}
                                />
                              </Grid>
                            )
                          )
                        : averageLoadCpuData(
                            allCpuData[allCpuData.length - 1].usagePerc.cpus
                          ).map((x, index) => (
                            <Grid item width="50%" minWidth="18vh">
                              <CoreBoard
                                coreIndex={index}
                                setIndex={(num?: number) => {
                                  setCoreIndex(num);
                                }}
                                selectedIndex={coreIndex}
                                allCpuData={allCpuData.map((deepX) => {
                                  return averageLoadCpuData(
                                    deepX.usagePerc.cpus
                                  ).find(
                                    (cpuFinder, cpuIndex) => cpuIndex === index
                                  )!;
                                })}
                              />
                            </Grid>
                          ))}
                    </Grid>
                  </Paper>
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
