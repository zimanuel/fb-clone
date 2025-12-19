"use client";

import { useState } from "react";
import GridOne from "./grid/one";
import GridTwo from "./grid/two";
import GridThree from "./grid/three";
import GridFour from "./grid/four";
import GridFive from "./grid/five";
import GridMore from "./grid/more";

export default function Medias({ type }: { type: "share" | "original" }) {
  const [mediaLength] = useState<number>(4);
  if (mediaLength === 1) {
    return <GridOne type={type} />;
  }

  if (mediaLength === 2) {
    return <GridTwo type={type} />;
  }

  if (mediaLength === 3) {
    return <GridThree type={type} />;
  }

  if (mediaLength === 4) {
    return <GridFour type={type} />;
  }

  if (mediaLength === 5) {
    return <GridFive type={type} />;
  }

  return <GridMore type={type} />;
}
