import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TokenIcon from "@mui/icons-material/Token";
import { Size } from "media-query";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { Button } from "@mui/material";

import { Menu } from "./Menu";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Logo from "Images/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';

export const TopBar = ({ setTopBarOn, MenuOpen }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  const actions = [
    { icon: <HomeIcon />, name: "Home", path: "/" },
    { icon: <TokenIcon />, name: "Tokens", path: "/deals" },
    { icon: <LoyaltyIcon />, name: "T Points", path: "/contact" },
    { icon: <AccountCircleIcon />, name: "Account", path: "/login" },
  ];

  const Spacer = () => {
    return (
      <>
        <Container></Container>
      </>
    );
  };

  return (
    <Fade timeout={1000} in={true}>
      <AppBar
        position="fixed"
        elevation={1}
        className="bg-gradient-to-r to-blue-0-300 from-blue-0-500"
      >
        {isResponsiveSize ? (
          <Toolbar>
            <Spacer />
            <Button onClick={MenuOpen} fullWidth={false}>
              <MenuIcon Size={"large"} style={{ color: "whitesmoke" }} />
            </Button>
          </Toolbar>
        ) : (
          <Toolbar>
            <Menu />
          </Toolbar>
        )}
      </AppBar>
    </Fade>
  );
};
