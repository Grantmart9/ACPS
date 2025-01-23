import React, { useState } from "react";
import ReactDOM from "react-dom";
import { TopBar } from "components/Display/TopBar";
import { ScreenLayoutInner } from "./ScreenLayoutInner";
import { Footer } from "./PageFooter";
import { Menu } from "components/Display/Menu";
import { Size } from "media-query";

export const ScreenLayout = () => {
  const [MenuOpen, setMenuOpen] = useState(false);
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  const ChangeMenuState = () => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <div>
      {isResponsiveSize ? (
        <div className="bg-gradient-to-b from-gray-light-light to-gray-light">
          <TopBar MenuOpen={ChangeMenuState} State={MenuOpen} />
          {MenuOpen ? (
            <div>
              <Menu MenuOpen={MenuOpen} />
            </div>
          ) : (
            <>
              <div>
                <ScreenLayoutInner />
              </div>
              <Footer />
            </>
          )}
        </div>
      ) : (
        <div className="bg-gradient-to-b from-gray-light-light to-gray-light">
          <TopBar />
          <div>
            <ScreenLayoutInner />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};
