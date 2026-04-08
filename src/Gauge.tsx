import { useState } from "react";
import { Ring } from "./Ring";

type TextProps = {
  content: number | string;
  x: number;
  y: number;
  fontSize: number;
  onClick?: () => void;
};

function Text({ content, x, y, fontSize, onClick }: TextProps) {
  return (
    <text
      x={`${x}%`}
      y={`${y}%`}
      textAnchor="middle"
      fontSize={fontSize}
      fill="#333"
      style={{ userSelect: "none" }}
      onClick={onClick}
    >
      {content}
    </text>
  );
}

type GaugeProps = {
  min: number;
  max: number;
  description1: string;
  description2: string;
};

export function Gauge({ min, max, description1, description2 }: GaugeProps) {
  const maxAngle = 269;
  const startingAngle = 136;
  const center = { x: 195, y: 166 };
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (!dragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const dx = mouseX - center.x;
    const dy = mouseY - center.y;

    console.log(mouseX, mouseY);

    let newAngle = Math.atan2(dy, dx) * (180 / Math.PI) - startingAngle;
    if (newAngle < 0) newAngle += 360;
    if (newAngle > maxAngle) newAngle = maxAngle;
    if (mouseX > 100 && mouseX < 190 && mouseY > 230) newAngle = 0;
    setAngle(newAngle);
  };

  const calculateValue = () => Math.floor(min + (angle / maxAngle) * (max - min));

  return (
    <svg
      width="390"
      height="332"
      onMouseMove={handleMouseMove}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onMouseDown={() => setDragging(true)}
      viewBox="0 0 390 332"
      fill="black"
    >
      <Ring />

      <g transform={`rotate(${angle} 195 166)`}>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M103.314 254.982C102.388 256.724 104.276 258.612 106.018 257.686L151.807 233.358C182.778 253.26 224.474 249.664 251.569 222.569C282.811 191.327 282.811 140.673 251.569 109.431C220.327 78.1895 169.673 78.1895 138.432 109.431C111.336 136.527 107.74 178.222 127.642 209.193L103.314 254.982Z"
          fill="#3C3E3F"
        />
        <circle cx="195" cy="166" r="70" fill="#E6EAED" />
      </g>

      <Text content={calculateValue()} x={50} y={54} fontSize={32} />
      <Text content={min} x={16} y={86} fontSize={20} />
      <Text content={max} x={86} y={86} fontSize={20} />
      <Text content={description1} x={50} y={86} fontSize={32} />
      <Text content={description2} x={50} y={96} fontSize={32} />
    </svg>
  );
}
