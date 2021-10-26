import React from "react";
import { StructuredText } from "react-datocms";

export default function Varieties({ data }) {
  const { title, varietiesContent } = data[0];
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <StructuredText data={varietiesContent} />
      </div>
    </div>
  );
}
