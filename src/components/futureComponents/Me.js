import "./Me.css";

function Me() {
  return (
    <div>
      <div className="me-img-container">
        <img className="me-img" src={require("./me.jpg")} />
      </div>
    </div>
  );
}
export default Me;
