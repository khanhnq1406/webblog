import { useEffect } from "react";
import "../css/CssCheatSheet.css";
const CssCheatSheet = () => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);
  return (
    <div className="css-cheatsheet">
      <h1>CSS Cheatsheet</h1>
      <h2>Animation timing linked to the scroll position</h2>
      <pre>
        <code className="language-css">
          .text-scrolling
          {"\n{\n"}
          {"  "}animation: 1s ease-in both; {"\n"}
          {"  "}/* animation timing linked to the scroll position */ {"\n"}
          {"  "}animation-timeline: view(); {"\n"}
          {"  "}/* starting the animation when the element enters the view */{" "}
          {"\n"}
          {"  "}animation-range: entry; {"\n"}
          {"}"}
        </code>
      </pre>
    </div>
  );
};

export default CssCheatSheet;
