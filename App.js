/**
 * Parcel offers so many special powers to optimize our App.
 *
 * HMR(Hot module replacement)
 * File watching Alogorithm(it is written in c++)
 * Bundling
 * Minifing the code
 * Dev and production build
 * Super fast build Algorithm
 * Image Optimization
 * caching while development
 * compression
 * Compatiable with older version browsers
 * https on dev(npm parcel index.html --https)
 * port number
 * consistent hashing algorithm
 * zero config
 *
 *
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Heading2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
