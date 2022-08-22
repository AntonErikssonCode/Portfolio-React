import "./ImgBoard.css";

function ImgBoard(props) {
  const img = props.img;
  const topBorder = props.topBorder;
  return (
    <div className="ImgBoard-div">
      <img
        className={topBorder ? "ImgBoardImg" : "ImgBoardImgNoTopBorder"}
        src={require(`${img}`)}
      />
    </div>
  );
}

export default ImgBoard;
