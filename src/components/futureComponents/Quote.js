import "./Quote.css";
import React, { useState, useEffect, useRef } from "react";
import svgTest from "./testimonial.png";

function Quote() {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  return (
    <div className="quote-div">
      <div ref={ref} className="quote">
        <div className="quote-icon">
          <img src={svgTest} />
        </div>
        <p>
          “ Anton är en <span className="bold">driven</span>,{" "}
          <span className="bold">målmedveten</span> person som har{" "}
          <span className="bold">lätt för att lära sig</span> och{" "}
          <span className="bold">visar ett stort intresse för arbetet.</span>{" "}
          <span className="bold">
            Samarbetet fungerar bra med både kunder och kollegor.
          </span>{" "}
          För mig som ledare har det varit ett sant nöje att få arbeta
          tillsammans med Anton, en{" "}
          <span className="bold">
            lojal teammedlem som sprider glädje varje dag.
          </span>{" "}
          ”
        </p>
        <div className="quote-bot">
          <h4>Frida Sand - Engman</h4>
          <h5>Telia Company Team Leader</h5>
        </div>
      </div>
      <div className="qoute-green qoute-logo" style={{ height: height }}></div>
      <div className="qoute-purple qoute-logo" style={{ height: height }}></div>
    </div>
  );
}

export default Quote;
