import "./ImgBoardContainer.css";
import ImgBoard from "./ImgBoard.js";
import Animate from "../../features/Animate";

function ImgBoardContainer() {
  return (
    <div className="ImgBoardContainer">
      <Animate variant={3}>
        <div className="images">
          <div className="imgContainer">
            <ImgBoard img="./assets/writing-new.jpg" topBorder={true} />
            <h3 className="imgTitle1">
              <span className="imgTitle1-row1">MASTER IN </span>
              <span className="imgTitle1-row2">INTERACTION DESIGN </span>{" "}
              <span className="imgTitle1-row3">AT CHALMERS</span>
            </h3>
          </div>
          <div className="imgContainer">
            <ImgBoard img="./assets/web-new.jpg" topBorder={true} />
            <div className="img-center-title">
              <h3 className="imgTitle2">
                <span className="imgTitle2-row1">LEARNING </span>
                <span className="imgTitle2-row2">
                  REACT <span className="notBold">and</span> THREE.JS{" "}
                </span>
                <span className="imgTitle2-row3">ADVANCED WEB DEVELOPMENT</span>
              </h3>
            </div>
          </div>
          <div className="imgContainer">
            <ImgBoard img="./assets/piano-new.jpg" topBorder={true} />
            <div className="img-center-title">
              <h3 className="imgTitle3">
                <span className="imgTitle3-row1">MASTER THESIS RESEARCH </span>
                <span className="imgTitle3-row2">
                  <span className="notBold"></span>VISUALIZING SOUND
                  <span className="notBold"> IN</span> 3D
                </span>
              </h3>
            </div>
          </div>
          <div className="imgContainer">
            <ImgBoard img="./assets/crypto-new.jpg" topBorder={true} />
            <div className="img-center-title">
              <h3 className="imgTitle4">
                <span className="imgTitle4-row1"><span className="bold">Developing</span> <span className="notBold">The</span></span>
                <span className="imgTitle4-row2">
                  <span className="notBold">Frontend For A <span className="bold">Blockchain Exhange</span></span>

                </span>
                <span   className=" notBold imgTitle4-row3">Using Ethers.js</span>
              </h3>
            </div>
          </div>
        </div>
      </Animate>
    </div>
  );
}

export default ImgBoardContainer;
