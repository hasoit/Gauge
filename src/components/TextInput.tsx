import { useId, useState } from "react";
import "./Input.css";

type TextInputProps = {
  label: string;
  initialValue: string;
  onEnterKey: (v: string) => void;
  validate?: (value: string) => boolean;
  placeholder?: string;
  disabled?: boolean;
};

export const TextInput = ({
  label,
  initialValue,
  onEnterKey,
  validate = () => true,
  placeholder,
  disabled = false
}: TextInputProps) => {
  const id = useId();
  const [value, setValue] = useState(initialValue);

  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && validate(value)) onEnterKey(value);
        }}
        placeholder={placeholder}
        disabled={disabled}
        className={`input-field ${validate(value) ? "" : "bad-value"}`}
      />
    </div>
  );
};
