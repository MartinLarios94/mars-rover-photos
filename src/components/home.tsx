import React from "react";
import { FilterSection } from "./filter-section";
import { NavBar } from "./navbar";

export const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <FilterSection />
    </div>
  );
};
