import { useState } from "react";
import TableOfContent from "./TableOfContent";

const Navigation = () => {
  const [content, setContent] = useState();
  const onClickHandle = (event) => {
    event.preventDefault();
    if (content) {
      setContent();
    } else
      setContent(
        <div className="toc-navigation">
          <TableOfContent />
        </div>
      );
  };
  return (
    <div className="navigation">
      <button onClick={onClickHandle}>
        <img src="/resources/down-arrow.png" alt="" />
      </button>
      {content}
    </div>
  );
};

export default Navigation;
