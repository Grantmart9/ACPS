import React, { useState, useEffect, useRef } from "react";
import { Size } from "media-query";
import Grow from "@mui/material/Grow";
import { Slide } from "@mui/material";
import ServiceImage from "Images/Services.png";
import service1 from "Images/service1.png";
import service2 from "Images/service2.png";
import service3 from "Images/service3.png";
import Fade from "@mui/material/Fade";

const ListOfServices = [
  {
    title: "Strategic Property Investment Advisory Services",
    services: [
      "Property Investment Policy",
      "Review Existing Portfolios & Structure New Funds",
      "Turnaround Strategies for Distress Property Assests",
    ],
    image: service1,
  },
  {
    title: "Implemented Consulting or Delegated Services",
    services: [
      "Property Asset Management",
      "Property Management, including Facilities Management",
      "Leasing, Financial administration & Reporting",
      "Property Development & Redevelopment",
    ],
    image: service2,
  },
  {
    title: "Value - Added Services",
    services: ["Property investment training", "Independent Opinion Check"],
    image: service3,
  },
];

export const Services = () => {
  const size = Size();

  return (
    <div className="block h-auto pt-1">
      <div className="block">
        <Grow in={true} timeout={800}>
          <img className="mt-16 mb-3 px-4 w-full" src={ServiceImage} />
        </Grow>
        <Slide in={true} timeout={1200} direction={"right"}>
          <div
            className="bg-gradient-to-r from-blue-0-300 to-blue-0-500 text-center justify-center mx-4 mb-2 p-2 rounded-t-md"
            style={{ color: "whitesmoke" }}
          >
            The ACPS service offering is supported by a highly customizable
            proprietary management and reporting system that provides real time
            access to reliable information enabling effective decisions.
          </div>
        </Slide>
        {ListOfServices.map((service) => {
          return (
            <Slide in={true} timeout={2300} direction={"right"}>
              <div className="grid grid-flow-row gap-0.5 px-4 mb-10">
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
                  <div className="grid grid-cols-2 gap-1">
                    <div>
                      {service.services.map((subservice) => (
                        <div>- {subservice}</div>
                      ))}
                    </div>
                    <Fade in={true} timneout={4000} appear={true}>
                      <div className="mx-auto my-auto">
                        <img src={service.image} width={200} />
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Slide>
          );
        })}
      </div>
    </div>
  );
};
