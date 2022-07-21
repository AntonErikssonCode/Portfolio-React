import "./Me.css";
import resume from './resume.pdf';
import grades from './grades.pdf';
import thesis from './thesis.pdf';
function Me() {
  return (
    <div className="me-main">
      <div className="me-main-bottom">
        <div className="me-main-bottom-align">
          <h3>
            What do I want to be when I <br />
            grow up?
          </h3>
          <div className="me-main-bottom-text">
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
              <li>Solve complex problems and apply my technical proficiency. </li>
              <li>Contribute to the good of humanity and the environment.</li>
              <li>Be a part of something grand. </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="me-container">
        <div className="me-img-container">
          <img className="me-img" src={require("./me-small.jpg")}></img>
          <div className="me-img-label">
            <h3>Anton Eriksson</h3>
          </div>
        </div>
        <div className="me-text-container">
          <h3>Hello there!</h3>
          <h4>Who am I?</h4>
          <p>
            Well, It’s a difficult task to try to convey a cohesive
            representation of oneself in a few lines on a webpage. I could tell
            you that I’m 27 years old and moved to Gothenburg five years ago,
            but it would hardly represent the multidisciplinary nature of my
            passions and competens. We all have multiple aspects to our
            character, and here are some of mine.
          </p>

          <h5>Anton The Designer</h5>
          <p>
            I love brainstorming and prototyping interesting concepts and find
            it extremely satisfying to develop and iterate upon an idea into a
            refined and beautiful experience.{" "}
          </p>
          <h5>Anton The Front End Developer</h5>
          <p>
            Where design yields visceral pleasure, coding gets me logical
            pleasure. It’s incredibly gratifying to construct and develop the
            design you’ve created into a working deployed product. Academically
            I’ve steered into projects involving code and I've been a hobbyist
            programmer for over five years.{" "}
          </p>
          <h5>Anton The Cognitive Scientist </h5>
          <p>
            I’ve always been intrigued with thoughts, feelings and behaviors and
            the discipline of Cognitive Science fit me like a glow. The
            scientifical backbone of the discipline has to great extent shaped
            how I perceive and manage the tasks around me.{" "}
          </p>

          <h5>Anton The Musician</h5>
          <p>
            I’ve been listening, playing and producing music for many years and
            would call myself an enthusiast. If you have some good tunes to
            share you can hit me up.{" "}
          </p>
        </div>
        
      </div>
      <div className="me-links-container">
      {/*     <h4>View My</h4> */}
          <div className="me-links">
          <a className="me-links-a" href = {resume} target = "_blank">RESUME</a>
          <a className="me-links-a"href = {grades} target = "_blank">GRADES</a>
          <a className="me-links-a"href = {thesis} target = "_blank">BCs THESIS</a>
          </div>
      </div>
      
    </div>
  );
}
export default Me;
