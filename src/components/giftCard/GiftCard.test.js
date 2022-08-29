// import React from 'react';
// import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import GiftCard from "./GiftCard";

describe("render content", () => {
  //it or test is the same
  it("should exits ", () => {
    console.log("existe un tiltel");
    render(<GiftCard />);
   //  expect(screen.getAllByRole("button"));
  });
});
