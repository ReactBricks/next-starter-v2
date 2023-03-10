import { types } from "react-bricks/frontend";
import reactBrickUi from "./react-bricks-ui";
import HeroUnit from "./custom/MyHeroUnit";

const bricks: types.Brick<any>[] = [
  ...reactBrickUi, // React Bricks UI
  HeroUnit, // Example custom brick
  // Put here your other bricks...
];

export default bricks;
