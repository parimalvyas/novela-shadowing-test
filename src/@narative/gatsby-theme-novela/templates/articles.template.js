import React from "react";

import ArticlesGrid from "../sections/articles/Articles.Grid";

function ArticlesPage({ location, pageContext }) {
  const articles = pageContext.group;

  return <ArticlesGrid articles={articles} />;
}

export default ArticlesPage;
