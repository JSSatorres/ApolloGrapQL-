import React from "react";
import { useQuery } from "@apollo/client";

import Navbar from "../components/navbar";

const Episodes = () => {
  return (
    <>
      <Navbar />
      <div className="bg-secondary"> episodes</div>
    </>
  );
};

export default Episodes;
