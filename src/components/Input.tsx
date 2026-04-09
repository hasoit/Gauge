import React, { ChangeEventHandler, useId } from "react";
import "./Input.css"

type InputProps = {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
};

export const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
}: InputProps) => {
  const id = useId();

  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="input-field"
      />
    </div>
  );
};