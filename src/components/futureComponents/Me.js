import "./Me.css";

function Me() {
  return (
    <div className="me-main">
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
      <div className="me-main-bottom">
        <h4>So what do I want to be when I grow up?</h4>
        <p>dasdasd</p>
        </div>
    </div>
  );
}
export default Me;
