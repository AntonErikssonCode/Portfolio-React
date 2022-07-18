import "./Me.css";

function Me() {
  return (
    <div className="me-container">
      <div className="me-img-container">
        <img className="me-img" src={require("./me.jpg")} >
       
        </img>
        <div className="me-img-label"><h3>Anton Eriksson</h3></div>
      </div>
      <div className="me-text-container">
        <h3>Hi, this is me!</h3>
        <h4>Who am i?</h4>
        <p>
          Vivamus blandit ut nunc quis sodales. Fusce nisl sem, ornare finibus
          arcu a, commodo ornare elit. Suspendisse potenti. Nunc non lorem at
          ipsum imperdiet eleifend. Morbi elementum neque massa, pharetra
          finibus ex finibus ac. Donec eu nunc mauris. Fusce volutpat dui
          lectus, ut dignissim ligula sagittis in. Integer at erat ac lorem
          sagittis varius ac vitae lectus. Vivamus ac venenatis eros. Proin ac
          interdum dui.
        </p>
        <h4>What do i aspire to be?</h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          nulla ante, congue nec sem non, aliquam bibendum purus. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Donec nisl est, eleifend sed euismod sit amet, mollis in
          est. Nam auctor iaculis purus, id fringilla turpis eleifend at. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Aliquam non lectus a tortor fringilla consequat id
          id magna. Donec placerat a purus id posuere. Pellentesque sodales
          aliquam sodales. Maecenas tincidunt justo non tellus condimentum
          sollicitudin. Praesent commodo, ante sed varius vestibulum, felis arcu
          vestibulum nisi, a lacinia ligula odio sed ex. Pellentesque a felis
          tempor, laoreet ex ac, rhoncus tellus. Nunc scelerisque mollis nibh
          non dapibus. Nulla ullamcorper ornare sem et laoreet. Praesent id arcu
          maximus lorem ullamcorper vulputate. In hac habitasse platea dictumst.
          In quis velit quis est egestas interdum vel at sapien.
        </p>
      </div>
    </div>
  );
}
export default Me;
