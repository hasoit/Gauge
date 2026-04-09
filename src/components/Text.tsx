type TextProps = {
  content: number | string;
  x: number;
  y: number;
  fontSize: number;
  onClick?: () => void;
};

export const Text = ({ content, x, y, fontSize, onClick }: TextProps) => {
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
};