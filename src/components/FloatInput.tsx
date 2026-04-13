import { useId, useState } from "react";
import "./Input.css";

type FloatInputProps = {
  label: string;
  initialValue: number;
  onEnterKey: (value: number) => void;
  validate?: (value: number) => boolean;
  placeholder?: string;
  disabled?: boolean;
};

export const FloatInput = ({
  label,
  initialValue,
  onEnterKey,
  validate = () => true,
  placeholder,
  disabled = false
}: FloatInputProps) => {
  const id = useId();
  const [value, setValue] = useState(initialValue);

  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        id={id}
        type="number"
        value={value}
        onChange={(e) => setValue(Number.parseFloat(e.target.value))}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !isNaN(value) && validate(value))
            onEnterKey(value);
        }}
        placeholder={placeholder}
        disabled={disabled}
        className={`input-field ${validate(value) ? "" : "bad-value"}`}
      />
    </div>
  );
};
