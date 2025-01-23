import React, { useState, useEffect } from "react";
import { Fade } from "@mui/material";

export const Contact = () => {
  return (
    <div className="block h-auto pt-1">
      <Fade in={true} timeout={1000}>
        <h1 className="p-2  text-gray-dark text-center justify-center font-bold text-3xl mt-16">
         Contact Us
        </h1>
      </Fade>
    </div>
  );
};
