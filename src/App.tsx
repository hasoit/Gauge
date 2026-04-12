import { useState } from "react";
import "./App.css";
import { Gauge } from "./components/Gauge";
import { Col, Row } from "./components/Containers";
import { RPMDisplay } from "./api/MockData";
import { NumberInput } from "./components/NumberInput";
import { TextInput } from "./components/TextInput";

export default function App() {
  const [max, setMax] = useState(150);
  const [min, setMin] = useState(0);
  const [description1, setDescription1] = useState("Rpm");
  const [description2, setDescription2] = useState("Propeller");

  return (
    <Row>
      <Gauge
        value={RPMDisplay(min, max) ?? 0}
        min={min}
        max={max}
        description1={description1}
        description2={description2}
      />

      <Col>
        <NumberInput
          label="min"
          value={min}
          onChange={(e) => setMin(Number.parseInt(e.target.value))}
          validate={(v) => v >= 0 && v.toString().length < 8}
        />

        <NumberInput
          label="max"
          value={max}
          onChange={(e) => setMax(Number.parseInt(e.target.value))}
          validate={(v) => v > 0  && v.toString().length < 8}
        />

        <TextInput
          label="Description 1"
          value={description1}
          onChange={(e) => setDescription1(e.target.value)}
          validate={(v) => v.length < 14}
        />

        <TextInput
          label="Description 2"
          value={description2}
          onChange={(e) => setDescription2(e.target.value)}
          validate={(v) => v.length < 16}
        />
      </Col>
    </Row>
  );
}
