import "./MyWebsite.css";

function MyWebsite() {
  const sliderOld = require("./slider-old.gif");
  const sliderFigma = require("./slider-figma.JPG");
  const sliderInspiration = require("./slider-inspiration.gif");
  const sliderFigma2 = require("./slider-figma2.JPG");

  return (
    <div className="MyWebsite-container">
      <div className="MyWebsite-inspiration-container">
        <div>
          <h3 className="MyWebsite-inspiration-firstTitle noMarginTop">
            The Task
          </h3>
          <p>
            Create a sleek website with an intuitive flow and storydriven
            trajectory.
          </p>
          <h3>Potential Users</h3>
          <p>Recruiters, employers & students. </p>
          <h3>Inspiration </h3>
          <p>
            I wanted to create an alluring navigational system for my personal
            webpage and avoid a bland navbar. I was inspired by the minimalistic
            style of the game 2048 and came up with a concept to have a
            joystick-like container where a box can be moved around, using the
            arrow keys, which determines the content of the page.{" "}
          </p>
        </div>
        <div className="portfolio-img portfolio-img-1">
          <img src={sliderInspiration} />
        </div>
      </div>
      <h3>User Feedback</h3>
      <div className="MyWebsite-userfeedback-container">
        <div className="portfolio-img portfolio-img-2">
          <img src={sliderOld} />
        </div>
        <div className="MyWebsite-userfeedback-container-left">
          <p>
            An evening was spent with vanilla JavaScript to create a mockup of
            this concept and I decided to show it to my student peers to get
            some user feedback. While they approved of the general concept I
            gained some valuable insights:{" "}
          </p>
          <ul>
            <li>
              Removing the option of scrolling with the up and down arrow keys
              decreases accessibility.{" "}
            </li>
            <li>
              The page traversal is not transparent enough, meaning it's unclear
              where the selector moves when you use the keys.{" "}
            </li>
            <li>
              Scalability might be an issue if each position in the container
              merely represents a single portfolio piece.{" "}
            </li>
          </ul>
          <p>
            I decided to scrap the square concept of the navigation and instead
            opt for a horizontal design since it would free up the up and down
            arrow keys and make the page trajectory more streamlined and more
            suited for a narrative. A horizontal design would be easier to scale
            for later expansions.{" "}
          </p>
        </div>
      </div>
      <p>
        While it's enjoyable to develop unique controls, the user experience
        will suffer if the user is incapable of intuitively discovering how to
        use the product. It might not be worth it to try to reinvent the wheel
        but I still wanted to put my twist on the traditional horizontal navbar.{" "}
      </p>
      <div className="MyWebsite-quote-container">
        <q>
          Users spend most of their time on other sites. This means that users
          prefer your site to work the same way as all the other sites they
          already know.
        </q>
        <address>Jacob’s Law</address>
      </div>
      <h3 className="noMarginTop">Figma Mockup</h3>
      <div className="MyWebsite-figmaMockup-container">
        <div className="portfolio-img portfolio-img-3">
          <img src={sliderFigma} />
        </div>
        <div>
          <p>
            I used figma to redesign the navbar in its new horizontal mode. A
            slider moving from one side to the other reminded me of a storyline
            evolving and decided to have the slider states consist of different
            tempuses instead of separate portfolio pieces. This change yield
            multiple advantages:
          </p>
          <ul>
            <li>
              It’s well suited to mediate what I’ve done, what I currently work
              on and what goals I have, which is valuable information for the
              user group.{" "}
            </li>
            <li>
              The different states are easier to scale and can each contain
              several relevant sections.{" "}
            </li>
            <li>
              I can include the semantic values of the slider states in the
              landing page for a compelling effect.{" "}
            </li>
            <li>
              The minimalist amount of choices/menu-items and usage of the
              established concept of time reduces cognitive load.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="centerDiv imgMargin">
        <div className="portfolio-img portfolio-img-4">
          <img src={sliderFigma2} />
        </div>
      </div>
      <h3>Coding and Iterating </h3>
      <p>
        I wireframed the fundamental outline of the website and decided to code
        it in React, since I wanted a single page scalable application. The main
        structure of the site was kept constant but over the iterations some
        versions were tested. For example I played around with the movement of
        the slider and tested if displacing it to one of the top corners would
        make it more visible. While it freed up some space on the top of the
        screen, feedback from peers conveyed that it made the impression less
        symmetrical and that the animation was not perceived as sleek. I
        therefore decided to keep the bar in the middle but increase the opacity
        and increase the color contrast to keep it popping.{" "}
      </p>
      <h3>Perks of the Final Design</h3>
      <p>The final design of the slider bar:</p>
      <ul>
        <li>Informs the user which page is selected</li>
        <li>Is aesthetically pleasing</li>
        <li>Is a part of a narrative</li>
        <li>Radiates pliancy</li>
        <li>Is accessible and makes arrow key navigation possible</li>
        <li>Is interactive and responsive</li>
      </ul>
    </div>
  );
}

export default MyWebsite;
