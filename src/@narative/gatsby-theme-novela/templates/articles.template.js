import React from "react";

import ArticlesGrid from "../sections/articles/Articles.Grid";

function ArticlesPage({ pageContext }) {
  const articles = pageContext.group;

  return <ArticlesGrid articles={articles} />;
}

export default ArticlesPage;
