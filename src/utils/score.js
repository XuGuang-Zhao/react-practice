import React from 'react';

export class Score {
  success = 0;
  
  setSuccess(val) {
    this.success = val;
    localStorage.setItem('won_times', val);
  }

  init() {
    const result = localStorage.getItem('won_times');
    this.success = Number(result);
    return this.success;
  }
}

const ScoreContext = React.createContext(null);

export default ScoreContext;