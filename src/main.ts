import "./style.css";
import { init } from "universalviewer";
import "universalviewer/dist/esm/index.css";

const data = {
  manifest: "https://wellcomelibrary.org/iiif/b18035723/manifest",
  embedded: true // needed for codesandbox frame
};

init("uv", data);
