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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Grow from "@mui/material/Grow";

export const TopBar = ({ MenuOpen, State }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  const Spacer = () => {
    return (
      <>
        <Container></Container>
      </>
    );
  };

  return (
    <>
      {" "}
      <AppBar
        position="fixed"
        elevation={1}
        className="bg-gradient-to-r to-blue-0-300 from-blue-0-500"
      >
        {isResponsiveSize ? (
          <Toolbar>
            <Spacer />
            {State ? (
              <Grow appear={true} in={true} timeout={800}>
                <Button onClick={MenuOpen} fullWidth={false}>
                  <CloseIcon Size={"large"} style={{ color: "whitesmoke" }} />
                </Button>
              </Grow>
            ) : (
              <Grow appear={true} in={true} timeout={800}>
                <Button onClick={MenuOpen} fullWidth={false}>
                  <MenuIcon Size={"large"} style={{ color: "whitesmoke" }} />
                </Button>
              </Grow>
            )}
          </Toolbar>
        ) : (
          <Toolbar>
            <Menu />
          </Toolbar>
        )}
      </AppBar>
    </>
  );
};
