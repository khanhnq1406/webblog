import { useEffect } from "react";
import TableOfContent from "./TableOfContent";
import "./BeInterview.css";
import BasicLevel from "./BasicLevel";
import References from "./References";
import IntermediateLevel from "./IntermediateLevel";
import AdvancedLevel from "./AdvancedLevel";
import Navigation from "./Navigation";
const BeInterview = () => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);
  return (
    <div className="fe-interview">
      <Navigation />
      <h1 style={{ marginTop: 0 }}>Frontend Interview</h1>
      <p>
        Reference from{" "}
        <a href="https://roadmap.sh/questions/backend">
          50 Popular Backend Developer Interview Questions and Answers
        </a>
      </p>
      <TableOfContent />

      <h1 id="basic-level">Basic Level</h1>
      <BasicLevel />

      <h1 id="intermediate-level">Intermediate Level</h1>
      <IntermediateLevel />

      <h1 id="advanced-level">Advanced Level</h1>
      <AdvancedLevel />

      <h1 id="references">References</h1>
      <References />
    </div>
  );
};

export default BeInterview;
