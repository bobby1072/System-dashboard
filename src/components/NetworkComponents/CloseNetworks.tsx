import {
  Grid,
  Paper,
  Typography,
  Divider,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { Systeminformation } from "systeminformation";
import { StyledBoxPaper } from "../../common/StyledPaper";
import MUIDataTable, { MUIDataTableColumnDef } from "mui-datatables";
import { useState } from "react";

export default function CloseNetworks({
  wifiNets,
}: {
  wifiNets: Systeminformation.WifiNetworkData[];
}) {
  const [fullList, setFullList] = useState<boolean>(false);
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
        customBodyRender: (value: number) => <Typography>{value}%</Typography>,
      },
    },
  ];
  const listOfNetworks = wifiNets.map((x) => {
    const tempRounded = Math.round(x.frequency / 100) * 100;
    x.frequency = tempRounded;
    return x;
  });
  return (
    <Paper>
      <FormControlLabel
        sx={{ m: 2 }}
        control={
          <Switch
            checked={fullList}
            onChange={() => {
              if (fullList) {
                setFullList(false);
              } else {
                setFullList(true);
              }
            }}
          />
        }
        label="Show full list of networks"
      />
      <Divider />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        direction="column"
        padding={2}
        width="100%"
        spacing={1}
      >
        <Grid item width="100%">
          <StyledBoxPaper>
            <MUIDataTable
              title="Wifi Networks"
              data={
                fullList
                  ? listOfNetworks
                  : listOfNetworks.filter(
                      (network, index, self) =>
                        index ===
                        self.findIndex(
                          (n) =>
                            n.ssid === network.ssid &&
                            n.frequency === network.frequency
                        )
                    )
              }
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
