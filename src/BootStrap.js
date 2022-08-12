import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteAll from "./routes/RoutesAll";

function Bootstrap() {
  return (
    <>
      <BrowserRouter>
        <RouteAll />
      </BrowserRouter>
    </>
  );
}

export default Bootstrap;
