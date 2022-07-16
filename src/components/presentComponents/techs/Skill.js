import "./Skill.css";

function Skill(props) {
  return (
    <div className="skill">
      <div className="skill-left">
      <img src={require('./JS-icon.png')} />
      </div>
      <div className="skill-right">
        <h3>JavaScript</h3>
        <ul>
          <li>Learning React</li>
          <li>Applied with mutiple APIS, such as Spotifys and SMHIs. </li>

        </ul>
      </div>
    </div>
  );
}
export default Skill;
