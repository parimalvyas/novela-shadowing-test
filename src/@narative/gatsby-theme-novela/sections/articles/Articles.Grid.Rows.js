import React from "react";

function ArticlesGridTiles({ articles }) {
  console.log("shadowing this component");

  if (!articles) return null;

  return <div>Grid</div>;
}

export default ArticlesGridTiles;
