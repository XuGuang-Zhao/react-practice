import { message } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import ScoreContext from '../../utils/score';

export default function Dashboard() {
  const [gameCount, setGameCount] = useState(10);
  const score = useContext(ScoreContext);
  const [success, setSuccess] = useState(() => score.init());

  useEffect(() => {
    fetch('http://cgi.cse.unsw.edu.au/~cs6080/21T3/data/remain.json ', {
      method: 'Get',
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          message.error(data.error);
        } else {
          setGameCount(data.remain);
        }
      })
  })

  const resetScore = () => {
    message.success('Score has been reset!');
    setSuccess(0);
    score.setSuccess(0);
  };

  return (
    <div className="home-container">
      <div className='top-container'>
        <div className="top-left">
          Game remaining to win: {gameCount - success}
        </div>
        <div className='top-right'>
          Game score: {success}
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-left">
          Game State: {
            success < 5 ? (<span> Keep going </span>)
              : (<span> Great job </span>)
          }
        </div>
        <div className="bottom-right">
          Game function: <button onClick={resetScore}> Reset </button>
        </div>
      </div>
    </div>
  )
}