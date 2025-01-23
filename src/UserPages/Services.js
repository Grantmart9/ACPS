import React, { useState, useEffect, useRef } from "react";
import { Size } from "media-query";
import Fade from "@mui/material/Fade";
import ServiceImage from "Images/Services.png";
import {
  pagetitlecolor,
  pagebgcolor,
  fontType,
} from "components/Display/feutures";

const ListOfServices = [
  {
    title: "Strategic Property Investment Advisory Services",
    services: [
      "Property Investment Policy",
      "Review Existing Portfolios & Structure New Funds",
      "Turnaround Strategies for Distress Property Assests",
    ],
  },
  {
    title: "Implemented Consulting or Delegated Services",
    services: [
      "Property Asset Management",
      "Property Management, including Facilities Management",
      "Leasing, Financial administration & Reporting",
      "Property Development & Redevelopment",
    ],
  },
  {
    title: "Value - Added Services",
    services: ["Property investment training", "Independent Opinion Check"],
  },
];

export const Services = () => {
  const size = Size();

  return (
    <div className="block h-auto pt-1">
      <Fade in={true} timeout={1000}>
        <div className="block">
          <img className="mt-16 mb-5 px-4" src={ServiceImage} />
          {ListOfServices.map((service) => {
            return (
              <div className="grid grid-flow-row gap-0.5 px-4 mb-2">
                <div
                  style={{
                    color: "whitesmoke",
                    padding: "5pt",
                    flex: 1,
                    textAlign: "left",
                  }}
                  className="bg-gradient-to-r from-blue-0-300 to-transparent rounded-tl-md rounded-r-lg"
                >
                  {service.title}
                </div>
                <div
                  style={{ color: "whitesmoke", padding: "5pt" }}
                  className="bg-gradient-to-r to-transparent rounded-b-sm  from-blue-0-500"
                >
                  {service.services.map((subservice) => (
                    <div>- {subservice}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
};
