import { useContext, useState } from 'react';
import { Slider, Row, Col, InputNumber } from 'rsuite'
import { AppContext } from '../context/Provider';

function SliderInput() {
  const [valueSlider, setValueSlider] = useState(0);
  const [valueInput, setValueInput] = useState(0);
  const {setError} = useContext(AppContext);
  const applyFormula = (value) =>{
      const result = (2 * Math.pow(value,2.699));
      return value = (Math.floor(result*100))/100; 
  };
  const applyInverseFormula = (value) =>{
    const result = (Math.pow(value/2,1/2.699));
    return value = (Math.floor(result*100))/100; 
};
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
            setValueInput(applyFormula(value));
            setError(applyFormula(value));
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
            setValueSlider(applyInverseFormula(value));
            setError(value);
          }}
        />
      </Col>
    </Row>
  );
}

export default SliderInput;