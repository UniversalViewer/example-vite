import "./style.css";
import { init } from "universalviewer";
import "universalviewer/dist/esm/index.css";
//import meSprite from "universalviewer/dist/mejs-controls.svg";

const urlParams = new URLSearchParams(window.location.search);
const data = {
  manifest: urlParams.get("manifest") ?? "https://wellcomelibrary.org/iiif/b18035723/manifest"
};

const uv = init("uv", data);
uv.on("configure", function ({ config, cb }) {
  cb({
//    modules: { mediaElementCenterPanel: { options: { iconSprite: meSprite } } }
  });
});
