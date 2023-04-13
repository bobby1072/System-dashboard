import { useQuery } from "react-query";
import MainAppBar from "../components/AppBar/AppBar";
export default function CpuBoard() {
  const {
    isLoading: cpuLoading,
    error: cpuError,
    data: cpuData,
  } = useQuery("get-cpu-info", () => 5, {
    retryDelay: 1000,
    retry: (count) => count < 5,
  });
  return (
    <div>
      <MainAppBar />
      <div className="App-header"></div>
    </div>
  );
}
