import { Box, Button, Grid, useTheme } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Systeminformation } from "systeminformation";
import CpuChart from "../../common/CpuChart";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "80%",
  maxHeight: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  padding: 2,
  overflowY: "auto",
};

export default function CoreModal({
  core,
  closeFunc,
}: {
  core: Systeminformation.CurrentLoadCpuData[];
  closeFunc: () => void;
}) {
  let startDataArray: number[] = core.map<number>((x) => x.load);
  if (core.length < 10) {
    for (let i = 0; i < 10 - core.length; i++) {
      startDataArray.unshift(0);
    }
  }
  const theme = useTheme();
  const seriesData: ApexAxisChartSeries = [
    {
      name: "overall core usage",
      data: startDataArray.slice(Math.max(core.length - 50, 0)),
      color: theme.palette.primary.main,
    },
  ];
  return (
    <Modal
      open
      keepMounted
      onClose={closeFunc}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      sx={{ width: "100%", height: "100%" }}
    >
      <Box sx={style} textAlign="center">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={2}
          padding={2}
          minHeight="36vh"
          minWidth="80vh"
        >
          <Grid item width="100%" height="36vh">
            <CpuChart series={seriesData} title="overall core usage" />
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={closeFunc}>
              Close
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
