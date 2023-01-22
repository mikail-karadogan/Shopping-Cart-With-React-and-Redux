import React from "react";
import NavigationLayout from "./NavigationLayout";
import { navigationData } from "./navigationData";

function HeadLayout() {
  return (
    <>
      <header className="bg-light">
        <div className="container">
          <NavigationLayout navigationData={navigationData} />
        </div>
      </header>
    </>
  );
}

export default HeadLayout;
