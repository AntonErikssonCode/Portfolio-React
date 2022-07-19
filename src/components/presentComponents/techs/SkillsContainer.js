import "./SkillsContainer.css";
import Skill from "./Skill";

function SkillsContainer() {
  return (
    <div className="skillContainer">
      <section className="skillSection">
        <h3>Technologies I'm Good At</h3>
        <div className="skillRow">
          <Skill name="JavaScript" image="./JS-icon-small.png" text={["Comfortable with vanilla JS.", "Taken two WebDev-courses."]}></Skill>
          <Skill name="Figma" image="./FIGMA-icon-small.png" text={["Main tool for wireframing in my masters.", "Made a mookup of this site before coding it."]}></Skill>
          <Skill name="HTML" image="./HTML-icon-small.png" text={["Straight forward stuff"]}></Skill>
          <Skill name="CSS" image="./CSS-icon-small.png" text={["Styled this site.", "I know how to center a div ;)"]}></Skill>
          <Skill name="FL-Studio" image="./FL-icon-small.jpg" text={["hej", "ad"]}></Skill>
       
        </div>
      </section>
      <section className="skillSection">
        <h3>Technologies I Know</h3>
        <div className="skillRow">
        <Skill name="PHP" image="./PHP-icon-small.png" text={["hej", "ad"]}></Skill>
          <Skill name="React" image="./REACT-icon-small.png" text={["hej", "ad"]}></Skill>
          <Skill name="SPSS" image="./SPSS-icon-small.png" text={["hej", "ad"]}></Skill>
          <Skill name="Python" image="./PYTHON-icon-small.png" text={["hej", "ad"]}></Skill>
     
     
     
        </div>
      </section>

      <section className="skillSection">
        <h3>Technologies I've Used</h3>
        <div className="skillRow">
          <Skill name="C++" image="./C++-icon-small.png" text={["hej", "ad"]}></Skill>
          <Skill name="C#" image="./C-icon-small.png" text={["hej", "ad"]}></Skill>
     
        </div>
      </section>
    </div>
  );
}
export default SkillsContainer;
