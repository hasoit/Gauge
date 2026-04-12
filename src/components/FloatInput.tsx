import { type ChangeEventHandler, useId } from "react";
import "./Input.css";

type FloatInputProps = {
  label: string;
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  validate?: (value: number) => boolean;
  placeholder?: string;
  disabled?: boolean;
};

export const FloatInput = ({
  label,
  value,
  onChange,
  validate = () => true,
  placeholder,
  disabled = false
}: FloatInputProps) => {
  const id = useId();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value === "") onChange(e);
    const newValue = Number.parseFloat(e.target.value);
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
        type="number"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className="input-field"
      />
    </div>
  );
};
