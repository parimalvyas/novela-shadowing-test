import React from "react";

function ArticlesGridTiles({ articles }) {
  console.log("shadowing this component");

  if (!articles) return null;

  return <div>Tiles</div>;
}

export default ArticlesGridTiles;
