import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import "./GuidePage.css";

function GuidePage() {
  const fileName = useParams().guide;
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../guides/${fileName}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="GuidePage">
      <h1 className="GuideName">{fileName}</h1>
      <Markdown className="MarkDown">{post}</Markdown>
    </div>
  );
}

export default GuidePage;
