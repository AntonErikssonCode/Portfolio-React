import "./SvgWave.css";
import svgIMG from "./maskgroup.svg";
function SvgWave(props) {
  const rotaded = props.rotated;
  const top = props.top;
  const color = props.color;
  console.dir(color);
  return (
    <div
      className={`SvgBot SvgBot-white ${rotaded ? "SvgWave-rotaded" : ""} ${
        top ? "SvgWave-top" : "SvgWave-bot"
      }`}
    >
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path style={{fill: color}} d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path style={{fill: color}}d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path style={{fill: color}}d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg> 
      {/* <img src={svgIMG}/> */}

      {/* <svg
        width="1200"
        height="120"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_115_247"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1200"
          height="120"
        >
          <rect width="1200" height="120" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_115_247)">
          <rect
            x="112"
            y="127.437"
            width="242"
            height="242"
            rx="5"
            transform="rotate(-21.4348 112 127.437)"
            fill={color}
          />
          <rect
            x="505"
            y="173.264"
            width="388"
            height="388"
            rx="5"
            transform="rotate(-14.2129 505 173.264)"
            fill={color}
          />
          <rect
            x="-25"
            y="47.5887"
            width="170"
            height="170"
            rx="5"
            transform="rotate(-16.2562 -25 47.5887)"
            fill={color}
            fill-opacity="0.3"
          />
          <rect
            x="331"
            y="47.5887"
            width="170"
            height="170"
            rx="5"
            transform="rotate(-16.2562 331 47.5887)"
            fill={color}
            fill-opacity="0.3"
          />
          <path
            d="M141.247 77.1027C139.454 75.0027 139.702 71.8467 141.802 70.0535L201.302 19.2468C203.402 17.4537 206.558 17.7024 208.351 19.8024L259.158 79.302C260.951 81.402 260.702 84.558 258.602 86.3512L199.103 137.158C197.003 138.951 193.847 138.702 192.054 136.602L141.247 77.1027Z"
            fill={color}
            fill-opacity="0.7"
          />
          <path
            d="M559.682 4.75766C560.531 2.13008 563.35 0.68848 565.977 1.53776L820.122 83.6822C822.75 84.5315 824.191 87.35 823.342 89.9776L741.198 344.122C740.348 346.75 737.53 348.192 734.902 347.342L480.757 265.198C478.13 264.349 476.688 261.53 477.538 258.903L559.682 4.75766Z"
            fill={color}
            fill-opacity="0.7"
          />
          <path
            d="M909.811 213.458C907.706 211.671 907.449 208.515 909.236 206.41L1082.11 2.81144C1083.9 0.706445 1087.05 0.448911 1089.16 2.23622L1292.75 175.108C1294.86 176.896 1295.12 180.051 1293.33 182.156L1120.46 385.755C1118.67 387.86 1115.52 388.117 1113.41 386.33L909.811 213.458Z"
            fill={color}
            fill-opacity="0.7"
          />
          <rect
            x="-190.334"
            y="51"
            width="490"
            height="490"
            rx="5"
            transform="rotate(8.05565 -190.334 51)"
            fill={color}
          />
          <rect
            x="343.153"
            width="378.396"
            height="378.396"
            rx="5"
            transform="rotate(39.591 343.153 0)"
            fill={color}
            fill-opacity="0.7"
          />
          <rect
            x="333.824"
            y="125.618"
            width="378.396"
            height="378.396"
            rx="5"
            transform="rotate(-13.2602 333.824 125.618)"
            fill={color}
          />
          <rect
            x="644"
            y="88.3672"
            width="215.227"
            height="215.227"
            rx="5"
            transform="rotate(-13.2602 644 88.3672)"
            fill={color}
            fill-opacity="0.7"
          />
          <rect
            x="918.915"
            y="-1"
            width="378.396"
            height="378.396"
            rx="5"
            transform="rotate(22.6819 918.915 -1)"
            fill={color}
          />
        </g>
      </svg> */}
    </div>
  );
}

export default SvgWave;
