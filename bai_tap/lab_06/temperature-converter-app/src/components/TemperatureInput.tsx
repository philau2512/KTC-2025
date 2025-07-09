import { ChangeEvent } from "react";

interface TemperatureInputProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TemperatureInput: React.FC<TemperatureInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="temperature-input">
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder="Nhập giá trị..."
      />
    </div>
  );
};

export default TemperatureInput;
