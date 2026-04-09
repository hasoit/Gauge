import { ChangeEventHandler } from "react";

type InputProps = {
  label: string;
  type: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
};

export const Input = ({ label, type, value, onChange }: InputProps) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <label style={{ width: "120px" }}>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

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

export const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
      {children}
    </div>
  );
};

export const Col = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {children}
    </div>
  );
};
