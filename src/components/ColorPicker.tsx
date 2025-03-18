import { ChangeEvent } from "react";

interface ColorPickerProps {
  label: string;
  defaultValue?: string;
  setter: (value: string) => void;
}

export function ColorPicker({
  label,
  defaultValue = "#000000",
  setter,
}: ColorPickerProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  return (
    <div className="color-picker-group">
      <label>{label}</label>
      <input type="color" defaultValue={defaultValue} onChange={handleChange} />
    </div>
  );
}
