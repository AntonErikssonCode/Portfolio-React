import "./Goals.css";

import SvgWave from "../layout/SvgWave"
function Goals() {
  return (
    <div className="goals-container">
      <SvgWave rotated={true} color="var(--secondColor)" top={true}/>
      <div>
        <div className="goals-main">
          <h3>
            What do I want to be when I <br />
            grow up?
          </h3>
          <div className="goals-text-text">
            <h4>I dream about an opportunity where I can: </h4>
            <ul>
              <li>
                Get usage of and apply my multidisciplinary knowledge to create
                amazing refined user experiences.
              </li>
              <li>
                Work in a creative environment where I get usage of my talent
                for ideation and concept development.
              </li>
              <li>Develop unique, intuitive and gorgeous interfaces.</li>
              <li>
                Solve complex problems and apply my technical proficiency.{" "}
              </li>
              <li>Contribute to the good of humanity and the environment.</li>
              <li>Be a part of something grand. </li>
            </ul>
          </div>
        </div>
      </div>
      <SvgWave rotated={true} color="white" top={false}/>
    </div>
  );
}

export default Goals;
