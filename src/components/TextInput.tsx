import React, { ChangeEventHandler, useId } from "react";
import "./Input.css";

type TextInputProps = {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  validate?: (value: string) => boolean;
  placeholder?: string;
  disabled?: boolean;
};

export const TextInput = ({
  label,
  value,
  onChange,
  validate = (_) => true,
  placeholder,
  disabled = false
}: TextInputProps) => {
  const id = useId();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    if (!validate(newValue)) return;
    onChange(e);
  };

  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className="input-field"
      />
    </div>
  );
};
