import "./ImgBoardContainer.css";
import ImgBoard from "./ImgBoard.js";
import Title from "../../features/Title";
function ImgBoardContainer() {
  return (
    <div className="ImgBoardContainer">
      <Title
        topTextSize="5vw"
        botTextSize="8vw"
        topText="What I Do In The"
        botText="PRESENT"
      />
      <div className="images">
        <div className="imgContainer">
        <ImgBoard img="./writingSmall.jpg" topBorder={true}/>
        <h3 className="imgTitle1"><span className="imgTitle1-row1">MASTER IN </span><span className="imgTitle1-row2">INTERACTION DESIGN </span> <span className="imgTitle1-row3">AT CHALMERS</span></h3>
        </div>
        <div className="imgContainer">
        <ImgBoard img="./webSmall.jpg" topBorder={false} />
        <h3 className="imgTitle2"><span className="imgTitle2-row1">LEARNING </span><span className="imgTitle2-row2">REACT <span className="notBold">and</span> THREE.JS </span> <span className="imgTitle2-row3">ADVANCED WEBDEVELOPMENT</span></h3>
        
        </div>
        <div className="imgContainer">
        <ImgBoard img="./pianoSmall.jpg" topBorder={false} />
        <h3 className="imgTitle3"><span className="imgTitle3-row1">MASTER THESIS RESEARCH </span><span className="imgTitle3-row2"><span className="notBold">HOW TO </span>VISUALIZE SOUND <span className="notBold">IN</span> 3D</span></h3>
        
        </div>
      </div>
    </div>
  );
}

export default ImgBoardContainer;
