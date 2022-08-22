import "./SkillsContainer.css";
import Skill from "./Skill";
import SvgWave from "../../layout/SvgWave";

function SkillsContainer() {
  return (
    <div className="skillContainer">
      <SvgWave rotated={true} color="var(--mainColor)" top={true} />
      <section className="skillSection">
        <h3>Technologies I'm Good At</h3>
        <div className="skillRow">
          <Skill
            name="JavaScript"
            image="./JS-icon-small.png"
            text={["Comfortable with vanilla JS.", "Taken two WebDev-courses."]}
          ></Skill>
          <Skill
            name="HTML"
            image="./HTML-icon-small.png"
            text={["In-depth knowledge."]}
          ></Skill>
          <Skill
            name="CSS"
            image="./CSS-icon-small.png"
            text={[
              "Styled this site using vanilla CSS!",
              "I know how to center a div ;)",
            ]}
          ></Skill>
          <Skill
            name="Figma"
            image="./FIGMA-icon-small.png"
            text={[
              "Main tool for wireframing in my masters.",
              "Made a mockup of this site before coding it.",
            ]}
          ></Skill>
          <Skill
            name="FL-Studio"
            image="./FL-icon-small.jpg"
            text={[
              "Engineered spatial and ambient sound for empirical studies. ",
              "Recorded a bunch of songs with friends and family. ",
            ]}
          ></Skill>
        </div>
      </section>
      <section className="skillSection">
        <h3>Technologies I Know</h3>
        <div className="skillRow">
          <Skill
            name="React"
            image="./REACT-icon-small.png"
            text={[
              "This site was created using React",
              "Applied multiple advanced libraries, such as Framer Motion and React Fiber. ",
            ]}
          ></Skill>
          <Skill
            name="Python"
            image="./PYTHON-icon-small.png"
            text={[
              "Coded a GUI and text generation algorithm for my BSc thesis",
              "Encountered it  back in 2017.",
            ]}
          ></Skill>
          <Skill
            name="PHP"
            image="./PHP-icon-small.png"
            text={[
              "Used it in a course in conjunction with SQL to create a working blog.",
              <a
                href="https://utbweb.its.ltu.se/~natrek-1/Uppgift_4V2/index.php?"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!{" "}
              </a>,
            ]}
          ></Skill>
          <Skill
            name="SPSS"
            image="./SPSS-icon-small.png"
            text={[
              "Conducted many experiments and studies requiring statistical analysis and SPSS has been the tool of choice.",
            ]}
          ></Skill>
        </div>
      </section>
      <section className="skillSection">
        <h3>Technologies I've Used</h3>
        <div className="skillRow">
          <Skill
            name="C#"
            image="./C-icon-small.png"
            text={["Got the basics down from a summer course."]}
          ></Skill>
          <Skill
            name="C++"
            image="./C++-icon-small.png"
            text={["Used it for computer graphics with OpenGL."]}
          ></Skill>
        </div>
      </section>
    </div>
  );
}
export default SkillsContainer;
