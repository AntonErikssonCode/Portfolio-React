import useCollapse from "react-collapsed";
import { useState } from "react";
import "./ProjectItem.css";
import ArrowButton from "../../features/ArrowButton";

function ProjectItem(props) {
  const title = props.title;
  const theme = props.theme;
  const image = props.image;
  const description = props.description;
  const alignment = props.alignment;
  const component = props.component;
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  function handleOnClick() {
    setExpanded(!isExpanded);
  }

  return (
    <div className="collapsible">
      <div
        className={`projectItem ${
          isExpanded ? "projectItem-big" : "projectItem-small"
        }`}
        {...getToggleProps({ onClick: handleOnClick })}
      >
        <div className={`itemContent ${"itemContent-" + alignment}`}>
          <div className="imageContainer">
            <img className={`image ${
          isExpanded ? "image-border-bot" : " "
        }`} src={image} />
          </div>

          <div className="rightPart">
            <h2 className="rightPartTitle">{title}</h2>
            <h3 className="rightPartTheme">{theme}</h3>
            <p className="rightPartDescription">{description}</p>
          </div>
        </div>
        <div className={`collapseField `}>
          {isExpanded ? (
            <ArrowButton upOrDown="down" />
          ) : (
            <ArrowButton upOrDown="up" />
          )}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">{component}</div>
        </div>
      </div>
    </div>
  );
}
export default ProjectItem;
