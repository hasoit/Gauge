import { useState } from "react";
import "./App.css";
import { Gauge } from "./Gauge";
import { Col, Input, Row } from "./Components";

export default function App() {
  const [max, setMax] = useState(150);
  const [min, setMin] = useState(0);
  const [description1, setDescription1] = useState("Rpm");
  const [description2, setDescription2] = useState("Propeller");

  return (
    <Row>
      <Gauge
        min={min}
        max={max}
        description1={description1}
        description2={description2}
      />

      <Col>
        <Input
          label="max"
          type="number"
          value={max}
          onChange={(e) => setMax(Number.parseInt(e.target.value))}
        />

        <Input
          label="min"
          type="number"
          value={min}
          onChange={(e) => setMin(Number.parseInt(e.target.value))}
        />

        <Input
          label="description 1"
          type="text"
          value={description1}
          onChange={(e) => setDescription1(e.target.value)}
        />

        <Input
          label="description 2"
          type="text"
          value={description2}
          onChange={(e) => setDescription2(e.target.value)}
        />
      </Col>
    </Row>
  );
}
