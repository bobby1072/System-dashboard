import { Paper, Grid, Typography } from "@mui/material";
export default function ScreenTitle() {
  return (
    <Paper>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={3}
        width="100%"
      >
        <Grid item>
          <Typography fontSize={45} variant="subtitle2">
            Graphics and Screen
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
