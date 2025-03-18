interface SliderProps {
  label: string;
  min?: string;
  max?: string;
  step?: string;
  defaultValue?: string;
  setter: (value: number) => void;
}

export function Slider({
  label,
  min = "0",
  max = "1",
  step = "0.1",
  defaultValue = "0.5",
  setter,
}: SliderProps) {
  return (
    <div className="slider-group">
      <label>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onChange={(e) => setter(parseFloat(e.target.value))}
      />
    </div>
  );
}
