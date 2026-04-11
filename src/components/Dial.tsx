type DialProps = { angle: number };

export const Dial = ({ angle }: DialProps) => (
  <g
    style={{
      transform: `rotate(${angle}deg)`,
      transition: "transform 0.4s ease-out",
      transformOrigin: "50% 50%"
    }}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M103.314 254.982C102.388 256.724 104.276 258.612 106.018 257.686L151.807 233.358C182.778 253.26 224.474 249.664 251.569 222.569C282.811 191.327 282.811 140.673 251.569 109.431C220.327 78.1895 169.673 78.1895 138.432 109.431C111.336 136.527 107.74 178.222 127.642 209.193L103.314 254.982Z"
      fill="#3C3E3F"
    />
    <circle cx="195" cy="166" r="70" fill="#E6EAED" />
  </g>
);
