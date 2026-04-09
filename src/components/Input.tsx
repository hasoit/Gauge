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
