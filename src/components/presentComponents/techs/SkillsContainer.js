import "./SkillsContainer.css";
import Skill from "./Skill";

function SkillsContainer() {
  return (
    <div className="skillContainer">
      <section className="skillSection">
        <h2>Technologies I'm Good At</h2>
        <div className="skillRow">
          <Skill></Skill>
          <Skill></Skill>
          <Skill></Skill>
        </div>
      </section>
      <section className="skillSection">
        <h2>Technologies I Know</h2>
        <div className="skillRow">
          <Skill></Skill>
          <Skill></Skill>
          <Skill></Skill>
        </div>
      </section>

      <section className="skillSection">
        <h2>Technologies I've Used</h2>
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
