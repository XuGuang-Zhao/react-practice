import React, { useContext, useState } from 'react';
import { Button, InputNumber, message } from 'antd';
import { getRandomNum, getRandomOperator } from './util';
import ScoreContext from '../../utils/score';
import './index.css';

export default function Math() {
  const score = useContext(ScoreContext);

  // Get random number
  const [randomNum1, setRandomNum1] = useState(getRandomNum());
  const [randomNum2, setRandomNum2] = useState(getRandomNum());

  // Get random opertor
  const [operator, setOperator] = useState(getRandomOperator());

  // To test the dashboard page
  const operate = (num1, num2) => {
    if (operator === '+') {
      return num1 + num2;
    }
    if (operator === '-') {
      return num1 - num2;
    }
    if (operator === '*') {
      return num1 * num2;
    }
    if (operator === '/') {
      return Number((num1 / num2).toFixed(2));
    }
    if (operator === '%') {
      return num1 % num2;
    }
  }

  const resultChange = (e) => {
    if (operate(randomNum1, randomNum2) === e) {
      score.setSuccess(score.success + 1);
      message.success("Grades add one!");
      reset();
    }
  }

  // reset function
  const reset = () => {
    setRandomNum1(getRandomNum());
    setRandomNum2(getRandomNum());
    setOperator(getRandomOperator());
  }

  return (
    <div className="math-container">
      <div className="calculation">
        <div className="number-container">
          {randomNum1}
        </div>
        <div className="operater-container">
          {operator}
        </div>
        <div className="number-container">
          {randomNum2}
        </div>
        <div className="equal-container">
          =
        </div>
        <div className="result-container">
          <InputNumber onChange={e => resultChange(e)} style={{ width: '80px', textAlign: 'center' }} />
        </div>
      </div>
      <div className="reset">
        <Button style={{ marginTop: 20, width: 120, float: 'right' }} onClick={reset}>Reset</Button>
      </div>
    </div>
  )
}