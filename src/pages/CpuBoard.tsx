import { useQuery } from "react-query";
import MainAppBar from "../components/AppBar/AppBar";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import ICpuType from "../common/ICpuType";
import CpuGetter from "../utils/CpuGetter";
import MainCpuGrid from "../components/CpuInformationDisplay/MainGrid";
export default function CpuBoard() {
  const { os, sys, osUtils } = window;
  const {
    isLoading: cpuLoading,
    error: cpuError,
    data: cpuData,
  } = useQuery<ICpuType>(
    "get-cpu-info",
    () => CpuGetter.AllInfo(os, sys, osUtils),
    {
      retryDelay: 1000,
      retry: (count) => count < 5,
    }
  );
  useEffect(() => {
    console.log(cpuData);
  }, [cpuData]);
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
            {cpuData && <MainCpuGrid device={cpuData} />}
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
