import React from "react"
import ReactDOM from "react-dom/client"
/***
+ *
* Parcel SUPER POWERS

+ * Created A Server
+ * HMR - Hot Module Replacement
+ * File Watcher algorithm - C++
+ * BUNDLING
+ * MINIFY
+ * Cleaning our Code
+ * Dev abd Production Build
+ * Super Fast build algorithm
+ * Image Optimization
+ * Caching while development
+ * Compression
+ * Compatble with older version of browser
+ * HTTPS on dev
+ * port Number
+ * Consistent Hashing Algorithm
+ * Zero Config
+ * Tree shaking
+ *
+ *
+ * Transitive Dependencies
+ */

const h2 = React.createElement(
  "h2",
  {
    title: "heading", //attributes
  },
  "Namasthe React!!!"
)

const h3 = React.createElement(
  "h3",
  {
    title: "heading2",
  },
  "Namasthe Everyone"
)

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [h2, h3]
)

console.log(h2)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)
