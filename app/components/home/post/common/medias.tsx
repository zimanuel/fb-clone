"use client";

import GridOne from "./grid/one";
import GridTwo from "./grid/two";
import GridThree from "./grid/three";
import GridFour from "./grid/four";
import GridFive from "./grid/five";
import GridMore from "./grid/more";

export default function Medias({
  type,
  medias,
}: {
  medias: {
    id: number;
    url: string;
    type: string;
  }[];
  type?: "share" | "original";
}) {
  if (medias.length === 1) {
    return <GridOne type={type} medias={medias} />;
  }

  if (medias.length === 2) {
    return <GridTwo type={type} medias={medias} />;
  }

  if (medias.length === 3) {
    return <GridThree type={type} medias={medias} />;
  }

  if (medias.length === 4) {
    return <GridFour type={type} medias={medias} />;
  }

  if (medias.length === 5) {
    return <GridFive type={type} medias={medias} />;
  }

  return <GridMore type={type} medias={medias} />;
}
