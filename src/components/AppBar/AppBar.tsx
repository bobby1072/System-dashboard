import {
  Box,
  Divider,
  List,
  Drawer,
  IconButton,
  Toolbar,
  styled,
  useTheme,
  AppBar,
  ListItem,
} from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import StorageIcon from "@mui/icons-material/Storage";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import logoImage from "./logoImage.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
export default function MainAppBar() {
  const [open, setOpenMenu] = useState<boolean>(false);
  const theme = useTheme();
  const openDraw = () => {
    setOpenMenu(true);
  };
  const closeDraw = () => {
    setOpenMenu(false);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Box
        sx={{
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.9)",
        }}
      >
        <AppBar position="static" sx={{ padding: 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={openDraw}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="img"
              src={logoImage}
              alt="logo"
              sx={{ width: "40vh", height: "9vh" }}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={closeDraw}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            key="cpu"
            disablePadding
            onClick={() => {
              navigate("/cpu");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <MemoryIcon />
              </ListItemIcon>
              <ListItemText primary="CPU" />
            </ListItemButton>
          </ListItem>
          <ListItem
            key="mem"
            disablePadding
            onClick={() => {
              navigate("/memory");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="Memory" />
            </ListItemButton>
          </ListItem>
          <ListItem
            key="battery"
            disablePadding
            onClick={() => {
              navigate("/battery");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <BatteryChargingFullIcon />
              </ListItemIcon>
              <ListItemText primary="Battery" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
