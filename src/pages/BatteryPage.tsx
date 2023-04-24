import { useQuery } from "react-query";
import { useEffect } from "react";
import MainAppBar from "../components/AppBar/AppBar";
import BatteryGetter from "../utils/BatteryGetter";

export default function BatteryPage() {
  const { os, sys } = window;
  const {
    isLoading: batteryLoading,
    data: batteryData,
    error: batteryError,
  } = useQuery("get-battery-info", () => BatteryGetter.AllInfo(os, sys), {
    retryDelay: 500,
    retry: (count) => count < 5,
    refetchInterval: 1,
  });
  useEffect(() => {
    console.log(batteryData);
  }, [batteryData]);
  return (
    <div>
      <MainAppBar />
      <div
        className="App-header"
        style={
          batteryLoading || batteryError ? { justifyContent: "center" } : {}
        }
      ></div>
    </div>
  );
}
