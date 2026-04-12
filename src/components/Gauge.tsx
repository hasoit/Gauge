import { Dial } from "./Dial";
import { Ring } from "./Ring";
import { Text } from "./Text";

type GaugeProps = {
  value: number;
  min: number;
  max: number;
  description1: string;
  description2: string;
};

export const Gauge = ({
  value,
  min,
  max,
  description1,
  description2
}: GaugeProps) => {
  min = isNaN(min) ? 0 : min;
  max = isNaN(max) ? 1 : max;

  if (value > max) value = max;

  const maxAngle = 269;
  const angle = (value / max) * maxAngle;

  return (
    <svg width="390" height="332" viewBox="0 0 390 332" fill="black">
      <Ring />

      <Dial angle={angle} />

      <Text content={value} x={50} y={54} fontSize={32} />
      <Text content={min} x={16} y={86} fontSize={20} />
      <Text content={max} x={86} y={86} fontSize={20} />
      <Text content={description1} x={50} y={86} fontSize={32} />
      <Text content={description2} x={50} y={96} fontSize={32} />
    </svg>
  );
};
