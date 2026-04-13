import { useId, useState } from "react";
import "./Input.css";

type NumberInputProps = {
  label: string;
  initialValue: number;
  onEnterKey: (v: number) => void;
  validate?: (value: number) => boolean;
  placeholder?: string;
  disabled?: boolean;
};

export const NumberInput = ({
  label,
  initialValue,
  onEnterKey,
  validate = () => true,
  placeholder,
  disabled = false
}: NumberInputProps) => {
  const id = useId();
  const [value, setValue] = useState(initialValue);

  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label} = {initialValue}
      </label>
      <input
        id={id}
        type="number"
        value={value}
        onChange={(e) => setValue(Number.parseInt(e.target.value))}
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
