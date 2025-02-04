import { Components } from "./Components";
import { Hooks } from "./Hooks";
import "./ReactRoadMap.css";
import { Rendering } from "./Rendering";
import { TableOfContent } from "./TableOfContents";
export const ReactRoadMap = () => {
  return (
    <div>
      <h1 className="text-center">React Roadmap</h1>
      <TableOfContent />
      <Components />
      <Rendering />
      <Hooks />
    </div>
  );
};
