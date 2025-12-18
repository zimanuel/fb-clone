"use client";

import { useState } from "react";
import GridOne from "./grid/one";
import GridTwo from "./grid/two";
import GridThree from "./grid/three";
import GridFour from "./grid/four";
import GridFive from "./grid/five";
import GridMore from "./grid/more";

export default function Medias() {
  const [mediaLength] = useState<number>(6);
  if (mediaLength === 1) {
    return <GridOne />;
  }

  if (mediaLength === 2) {
    return <GridTwo />;
  }

  if (mediaLength === 3) {
    return <GridThree />;
  }

  if (mediaLength === 4) {
    return <GridFour />;
  }

  if (mediaLength === 5) {
    return <GridFive />;
  }

  return <GridMore />;
}
