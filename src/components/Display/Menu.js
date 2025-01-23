import React, { useState } from "react";
import { Button } from "@mui/material";
import { Size } from "media-query";
import { Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slide from "@mui/material/Slide";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

const MenuList = [
  { ButtonName: "Home", path: "/", endIcon: "" },
  {
    ButtonName: "Services",
    path: "/services",
    endIcon: "",
    subMenu: [
      "Property Asset Management",
      "Property Management",
      "Development Management",
      "Fund Establishment",
    ],
  },
  {
    ButtonName: "Unique Offering",
    path: "/unique-offering",
    endIcon: "",
    subMenu: [
      "Top-Line",
      "Risk Adjustment Fee Model",
      "Artificial Intelligence",
      "Integrated Property Solutions",
    ],
  },
  { ButtonName: "About Us", path: "/about-us", endIcon: "" },
  {
    ButtonName: "Maintenance Help Desk",
    path: "/maintenance-help-desk",
    endIcon: "",
  },
];

export const Menu = ({ MenuOpen }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  return (
    <div>
      {isResponsiveSize ? (
        <Slide
          timeout={1700}
          in={MenuOpen}
          direction={"right"}
          mountOnEnter
          unmountOnExit
        >
          <Box className="pt-28 bg-gradient-to-tl from-blue-0-300 to-blue-0-500 h-screen">
            <div className="grid grid-flow-row gap-2 ">
              {MenuList.map((MenuItem, i) => (
                <Button
                  sx={{ textTransform: "none", color: "whitesmoke" }}
                  href={MenuItem.path}
                >
                  {MenuItem.ButtonName}
                </Button>
              ))}
            </div>
          </Box>
        </Slide>
      ) : (
        <div className="grid grid-flow-col gap-2 ml-10">
          {MenuList.map((MenuItem, i) => (
            <Button
              fullWidth={true}
              size={"small"}
              sx={{
                textTransform: "none",
                color: "whitesmoke",
              }}
              endIcon={MenuItem.endIcon}
              href={MenuItem.path}
            >
              <text
                style={{ whiteSpace: "nowrap" }}
                className="text-center justify-center"
              >
                {MenuItem.ButtonName}
              </text>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
