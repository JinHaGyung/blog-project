/* eslint-disable*/

import { useState } from 'react';
import './App.css';
import Modal from "./component/Model"

let today = new Date();   

let month = today.getMonth() + 1;  // 월
let day = today.getDate();  // 날짜

function App() {
  let [title,setTitle]=useState(["리액트 스터디","State 연습하기","리액트 이론"]);
  let [titleNum, setTitleNum]=useState();
  //자료 내용
  let [date,setDate] = useState(["2월 17일 발행","5월 4일 발행","7월 27일 수정"]);
  // 추천 클릭수
  let [count,setCount]=useState([3,5,1]);
  let [bestCount,setBestCount] = useState([0,0,0]);
  // 모달창
  let [modal,setModal]=useState(false);
  //입력창
  let [putMemo,setPutMemo] = useState("");

  //추천 클릭수 증가
  let countClick= (index)=>{
    if(bestCount[index] == 0){
      let countArray = [...count]
      let bestArrat = [...bestCount];
      countArray[index] += 1;
      bestArrat[index] = 1;
      setCount(countArray)
      setBestCount(bestArrat);
    }
    else {
      alert("추천은 한번만 가능합니다.");
    }
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>진하경 REACT BLOG</h4>
      </div>
      <div className='content_wrap'>
        <div className='list_wrapper'>
        {title.map((title,index)=>{
          return(
                <div className='list' key={index}  onClick={()=>{setModal(!modal),setTitleNum(index)}}>
                <h4>{title} 
                <span onClick={(e)=>{e.stopPropagation(); countClick(index)}}> {bestCount[index]==1? <span>💕</span> : <span>♡</span>} </span>{count[index]}</h4>
                <p>{date[index]}</p>
              </div>
          )
        })}
        </div>
      </div>
      {modal ? <Modal titleNum={titleNum} title={title} setTitle={setTitle} date={date} 
      count={count} setCount={setCount} bestCount={bestCount} setBestCount={setBestCount} setDate={setDate}/>  :null}
      <input onChange={(e)=>{setPutMemo(e.target.value);
      }}></input>
      <button onClick={()=>{
         let titleArray = [...title,putMemo];
         let countArray = [...count,0];
         let bestArrat = [...bestCount,0];
         let dateArray = [...date,`${month}월 ${day} 발행`];
         setDate(dateArray)
         setTitle(titleArray)
         setCount(countArray);
         setBestCount(bestArrat);
        setTitle}}>글 발행</button>
    </div>
);
}


export default App;
