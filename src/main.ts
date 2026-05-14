import "./style.css";
import { init } from "universalviewer";
import "universalviewer/dist/esm/index.css";
import meSprite from "universalviewer/dist/mejs-controls.svg";

const data = {
  manifest: "https://iiif.io/api/cookbook/recipe/0003-mvm-video/manifest.json",
  embedded: true // needed for codesandbox frame
};

const uv = init("uv", data);
uv.on("configure", function ({ config, cb }) {
  cb({
    modules: { mediaElementCenterPanel: { options: { iconSprite: meSprite } } }
  });
});
