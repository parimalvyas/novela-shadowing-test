import React, { useContext } from "react";

import ArticlesGridTiles from "./Articles.Grid.Tiles";
import ArticlesGridRows from "./Articles.Grid.Rows";

function ArticlesGrid({ articles }) {
  return gridLayout === "tiles" ? (
    <ArticlesGridTiles articles={articles} />
  ) : (
    <ArticlesGridRows articles={articles} />
  );
}

export default ArticlesGrid;
