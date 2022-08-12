import "./Skill.css";

import Animate from "../../features/Animate";
function Skill(props) {
  const name = props.name;
  const image = props.image;
  const text = props.text;
  const textList = text.map(function (item, i) {
    return <li key={i}>{item}</li>;
  });

  return (
    <Animate variant={0}>
      <div className="skill">
        <div className="skill-left">
          <img src={require(`${image}`)} />
        </div>
        <div className="skill-right">
          <h3>{name}</h3>
          <ul>{textList}</ul>
        </div>
      </div>
    </Animate>
  );
}
export default Skill;
