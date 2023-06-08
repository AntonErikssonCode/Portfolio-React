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
        </div>
      </Animate>
    </div>
  );
}

export default ImgBoardContainer;
