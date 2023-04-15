import { Box, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Systeminformation } from "systeminformation";
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
  return (
    <Modal
      open
      keepMounted
      onClose={closeFunc}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style} textAlign="center">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Grid item width="100%" height="100%"></Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
