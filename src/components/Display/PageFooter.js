import React, { useState, useEffect, useRef } from "react";
import { Size } from "media-query";
import { Button } from "@mui/material";

export const Footer = () => {
  const size = Size();

  return (
    <div className="block p-2" style={{backgroundColor:"transparent"}}>
      <div className="grid grid-cols-3 gap-1">
        <div className="text-center jusitfy-center">
          © African Commercial Property Solutions 2025
        </div>
        <Button sx={{ color: "black", textTransform: "none" }}>
          Back to top
        </Button>
        <div className="text-center jusitfy-center">Privacy</div>
      </div>
    </div>
  );
};
