import { useState } from "react";
import { RPMDisplay } from "./api/MockData";
import "./App.css";
import { Col, Row } from "./components/Containers";
import { FloatInput } from "./components/FloatInput";
import { Gauge } from "./components/Gauge";
import { NumberInput } from "./components/NumberInput";
import { TextInput } from "./components/TextInput";

export default function App() {
  const [max, setMax] = useState(150);
  const [min, setMin] = useState(0);
  const [refreshRateMS, setRefreshRateMS] = useState(100);
  const [scale, setScale] = useState(1.0);
  const [description1, setDescription1] = useState("Rpm");
  const [description2, setDescription2] = useState("Propeller");

  return (
    <Row>
      <Gauge
        value={RPMDisplay(min, max, refreshRateMS)}
        min={min}
        max={max}
        description1={description1}
        description2={description2}
        scale={scale}
      />

      <Col>
        <NumberInput
          label="Min"
          initialValue={min}
          onEnterKey={setMin}
          validate={(v) => v >= 0 && v < max && v.toString().length < 8}
        />

        <NumberInput
          label="Max"
          initialValue={max}
          onEnterKey={setMax}
          validate={(v) => v > 0 && v > min && v.toString().length < 8}
        />

        <TextInput
          label="Description 1"
          initialValue={description1}
          onEnterKey={setDescription1}
          validate={(v) => v.length < 14}
        />

        <TextInput
          label="Description 2"
          initialValue={description2}
          onEnterKey={setDescription2}
          validate={(v) => v.length < 32}
        />
      </Col>

      <Col>
        <NumberInput
          label="Refresh rate (ms / update)"
          initialValue={refreshRateMS}
          onEnterKey={setRefreshRateMS}
          validate={(v) => v > 0 && v.toString().length < 8}
        />

        <FloatInput
          label="Scale"
          initialValue={scale}
          onEnterKey={setScale}
          validate={(v) => v > 0 && v.toString().length < 8}
        />
      </Col>
    </Row>
  );
}
