import React, { useState, useEffect, useRef } from "react";
import { Size } from "media-query";
import { Slide } from "@mui/material";
import OfferingImage from "Images/Offering.png";
import Offering1 from "Images/offering1.png";
import Offering2 from "Images/Offering2.png";
import Offering3 from "Images/Offering3.png";
import Offering4 from "Images/Offering4.png";

const ListOfOfferings = [
  {
    title: "Top - Line",
    detail:
      "Property value is largely a function of rental and cash flow influenced by the economic climate in which property portfolios in the various sectors operate. Rentals are being challenged by tenants in an aggravated, depressed economy, in particular, the retail and office sectors. Property owners are forced to 're-think' their portfolio strategies, firstly to retain existing tenancies through rental reversions where absolutely necessary, where businesses have a reasonable prospect of success, and secondly, to identify, explore and implement 'change-of-use' strategies. It's not a case of 'one-shoe-fits-all', as each property needs to be assessed with it's own challenges. H&R, is well experienced at developing leasing strategies across all sectors for Landlords. In certain instances, Landlords have to invest defensive capital expenditure in their property assets in order to retain and attract new strong credit-worthy tenants to ensure the ongoing future growth in value of their portfolios and maintain dominance in their target market.",
    image: Offering1,
  },
  {
    title: "Risk Adjustment Fee Model",
    detail:
      "Traditionally, property asset management fees and property management fees have been calculated as a percentage of enterprise value and rental collections, respectively. In these challenging times, property owners and managers' rewards need to be determined on a combination of a “risk adjusted” and an “out-performance” model, with a correlation between performance and reward.",
    image: Offering2,
  },
  {
    title: "Artificial Intelligence ('AI')",
    detail:
      "In all probability, amongst the most successful property funds will be those that have instant access to reliable informative real-time data which can accelerate decision making. H&R has a clearly defined AI strategy, through the integration of its IT Infrastructure and Data Sources. An imperative for H&R, is to provide data management, insights and reporting tailored to suit a client’s individual needs, on the concept of ‘less is more’. H&R Dynamics is an Asset Management Tool developed by H&R in the PropTech space pertinent to the property investment sector. H&R Dynamics is an advanced digitised real time tool, which integrates the spheres of Property Asset Management and Property Management into an Integrated Property Solution through real-time data warehousing of data sets from independent applications on which large property portfolios are dependent. Dashboards, analytics, insights, graphs and reporting can be customised to clients individual requirements. H&R’s AI strategy is a direct driver of the “bottom line” of all assets under management. H&R’s AI platform, H&R Dynamics, forms the backbone to any small, mid-size or large property portfolio, through our Integrated Property Solution offering, as an enhancer of performance, be it in terms of operational efficiency or financially.",
    image: Offering3,
  },
  {
    title: "Integrated Property Solution",
    detail:
      "A number of property funds operate on a distinct, and sometimes polarized property asset management and property management model. The integration of these two functional areas, to the extent possible, gives rise to numerous operational efficiencies, as a driver of the “bottom line” of any mid-size to large property fund.",
    image: Offering4,
  },
];

export const Offering = () => {
  const size = Size();

  return (
    <div className="block h-auto pt-4">
      <div className="block">
        <img className="mt-16 mb-3 px-4 w-full" src={OfferingImage} />

        {ListOfOfferings.map((service) => {
          return (
            <div className="grid grid-flow-row gap-0.5 px-4 mb-10">
              <Slide in={true} timeout={1500} direction={"up"}>
                <div>
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
                    <div className="grid md:grid-cols-2 gap-1 p-4">
                      {service.detail}
                      <div className="mx-auto my-auto p-0.5 bg-gradient-to-tl from-blue-0-300 to-blue-0-500 rounded-t-md mt-2 ">
                        <img className="rounded-t-md" src={service.image} width={350} />
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          );
        })}
      </div>
    </div>
  );
};
