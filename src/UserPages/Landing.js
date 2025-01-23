import React, { useEffect, useState } from "react";
import { Size } from "media-query";
import { DealsLandingPage, layoutbgcolor } from "components/Display/AppControl";
import { IconButton, TextField } from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import { Button } from "@mui/material";

export const Landing = ({ topBarOn }) => {
  var size = Size();
  // const variable array to save the users location
  const [userLocation, setUserLocation] = useState(null);
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);
  const isResponsiveSize2 = ["XS", "SM", "MD", "L"].includes(size);

  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          // update the value of userlocation variable
          setUserLocation({ latitude, longitude });
        },
        // if there was an error getting the users location
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return <div></div>;
};
