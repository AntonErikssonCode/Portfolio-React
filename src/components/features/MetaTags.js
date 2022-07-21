import React from "react";
import DocumentMeta from "react-document-meta";



function MetaTags(props){
  const meta = {
    title: props.title,
    description: props.description,
    meta: {
      charset: "utf-8",
      name: {
        keywords: props.keywords
      }
    }
  };
  return (
    <div>
      <DocumentMeta {...meta} />
    </div>
  );
}

export default MetaTags;