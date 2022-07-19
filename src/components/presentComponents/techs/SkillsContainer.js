import "./SkillsContainer.css";
import Skill from "./Skill";

function SkillsContainer() {
  return (
    <div className="skillContainer">
      <section className="skillSection">
        <h3>Technologies I'm Good At</h3>
        <div className="skillRow">
          <Skill></Skill>
          <Skill></Skill>
          <Skill></Skill>
        </div>
      </section>
      <section className="skillSection">
        <h3>Technologies I Know</h3>
        <div className="skillRow">
          <Skill></Skill>
          <Skill></Skill>
          <Skill></Skill>
        </div>
      </section>

      <section className="skillSection">
        <h3>Technologies I've Used</h3>
        <div className="skillRow">
          <Skill></Skill>
          <Skill></Skill>
          <Skill></Skill>
        </div>
      </section>
    </div>
  );
}
export default SkillsContainer;
