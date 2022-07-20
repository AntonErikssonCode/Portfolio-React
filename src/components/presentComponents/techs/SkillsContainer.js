import "./SkillsContainer.css";
import Skill from "./Skill";

function SkillsContainer() {
  return (
    <div className="skillContainer">
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
            text={["Fundamental knowledge."]}
          ></Skill>
          <Skill
            name="CSS"
            image="./CSS-icon-small.png"
            text={[
              "Styled this site in vanilla CSS!",
              "I know how to center a div ;)",
            ]}
          ></Skill>
            <Skill
            name="Figma"
            image="./FIGMA-icon-small.png"
            text={[
              "Main tool for wireframing in my masters.",
              "Made a mookup of this site before coding it.",
            ]}
          ></Skill>
          <Skill
            name="FL-Studio"
            image="./FL-icon-small.jpg"
            text={[
              "Recorded and produced a bunch of groovy tracks with friends and family.",
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
              "Dabbled in mutiple libraries, such as Framer Motion.",
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
              "Used it in a course in conjuction with SQL to create a working blog.",
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
              "Ran many experiments and studies requiring statistical analysis and SPSS has been the tool of choice.  ",
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
