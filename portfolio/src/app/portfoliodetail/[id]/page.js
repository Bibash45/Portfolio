"use client";
import React from "react";
import PortfolioDetailDesign from "../../page/portfolio-detail-design";
import { DataArray } from "@/app/data";
import { useParams } from "next/navigation";

const Portfolio = (props) => {
  const { id } = useParams();
  console.log(id);
  
  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <PortfolioDetailDesign data={DataArray[id]} id={id} DataArray={DataArray} />
  );
};

export default Portfolio;
