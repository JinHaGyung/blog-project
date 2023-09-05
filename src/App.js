/* eslint-disable*/

import { useState } from 'react';
import './App.css';

function App() {
  let [title,setTitle]=useState(["리액트 스터디","State 연습하기","리액트 이론"]);
  let [count,setCount]=useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>REACT BLOG</h4>
      </div>
      <div className='list'>
        <h4>{title[0]} <span onClick={()=>{setCount(count+=1)}}>👍</span> {count} </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
