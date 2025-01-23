import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { Services } from "UserPages/Services";
import { Landing } from "UserPages/Landing";
import { Offering } from "UserPages/Offering";
import { About } from "UserPages/About";
import { Contact } from "UserPages/Contact";
import { Maintenance } from "UserPages/Maintainance";

export const ScreenLayoutInner = () => {
  return (
    <div>
      <Switch>
        <Route path={"/home"}>
          <Landing />
        </Route>
        <Route path={"/services"}>
          <Services />
        </Route>
        <Route path={"/unique-offering"}>
          <Offering />
        </Route>
        <Route path={"/about-us"}>
          <About />
        </Route>
        <Route path={"/maintenance-help-desk"}>
          <Maintenance />
        </Route>
        <Route path={"/contact-us"}>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};
