import { useContext, useState } from 'react';
import { Slider, Row, Col, InputNumber } from 'rsuite'
import { AppContext } from '../context/Provider';

function SliderInput() {
  const [valueSlider, setValueSlider] = useState(0);
  const [valueInput, setValueInput] = useState(0);
  const {setError} = useContext(AppContext);
  return (
    <Row>
      <Col md={10} xs={12}>
        <Slider
          step={0.01}
          min={0}
          max={10}
          progress
          style={{ marginTop: 16 }}
          value={valueSlider}
          onChange={value => {
            setValueSlider(value);
            setValueInput(value);
            setError(value);
          }}
        />
      </Col>
      <Col md={12} xs={12}>
        <InputNumber
          min={0}
          max={1000}
          value={valueInput}
          onChange={value => {
            setValueInput(value);
            setValueSlider(Math.min(value,10));
            setError(value);
          }}
        />
      </Col>
    </Row>
  );
}

export default SliderInput;