import "./Projects.css";

function ProjectDiscopop() {
  const device = require("../../../assets/project4/device.png");

  return (
    <div className="MyWebsite-container">
      <div className="MyWebsite-inspiration-container">
        <div>
          <div className="container-divide">
            <div className="container-left">
              <h3 className="MyWebsite-inspiration-firstTitle noMarginTop">
                The Task
              </h3>
              <p>
              Our mission was to craft an engaging and entertaining collocated mobile application that would captivate users.
              </p>
              <h3>Responsibility</h3>
              <p>In this project, I embraced the role of the sole coder, shouldering the entire responsibility for mastering Flutter, Firebase RealTime Database, and mobile game development. Despite the demanding time constraints of just two weeks, I am proud to declare that I successfully executed the project with utmost proficiency.</p>
              <br></br>
              <p>Furthermore, it was I who conceived the original idea, injecting a touch of innovation and creativity into the project's inception.</p>
              
            </div>
            <div className="container-right">
              <div className="portfolio-img portfolio-img-1">
                <img src={device} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="">Demo</h3>
   
        <div class="responsive-iframe">
          <iframe
            src="https://www.youtube.com/embed/O41MHlowH-M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      
    </div>
  );
}

export default ProjectDiscopop;
