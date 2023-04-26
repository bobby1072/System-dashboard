import { Grid, Paper, Typography } from "@mui/material";
import { Systeminformation } from "systeminformation";
import { StyledBoxPaper } from "../../common/StyledPaper";
import MUIDataTable, { MUIDataTableColumnDef } from "mui-datatables";

export default function CloseNetworks({
  wifiNets,
}: {
  wifiNets: Systeminformation.WifiNetworkData[];
}) {
  const columns: MUIDataTableColumnDef[] = [
    { name: "ssid", label: "SSID" },
    { name: "security", label: "Security", options: { sort: false } },
    {
      name: "frequency",
      label: "Frequency",
      options: {
        sort: false,
        customBodyRender: (val: number) => {
          return <Typography>{val / 1000} GHz</Typography>;
        },
      },
    },
    {
      name: "quality",
      label: "Quality",
      options: {
        sort: false,
        customBodyRender: (value: number) => <Typography>{value}%</Typography>,
      },
    },
  ];
  return (
    <Paper>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        direction="column"
        padding={2}
        width="100%"
      >
        <Grid item width="100%">
          <StyledBoxPaper>
            <MUIDataTable
              title="Wifi Networks"
              data={wifiNets.map((x) => {
                const tempRounded = Math.round(x.frequency / 100) * 100;
                x.frequency = tempRounded;
                return x;
              })}
              columns={columns}
              options={{
                selectableRows: "none",
                print: false,
                download: false,
              }}
            />
          </StyledBoxPaper>
        </Grid>
      </Grid>
    </Paper>
  );
}
