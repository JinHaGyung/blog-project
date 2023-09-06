function Modal({title,setTitle,titleNum,date,count,setCount,bestCount,setBestCount,setDate})
{ return(
    <div className='modal'>
      <h4>{title[titleNum]}</h4>
      <p>DATA : {date[titleNum]}</p>
      <p>상세내용</p>
      <button
        onClick={()=>{
          console.log(titleNum)
          let titleArray = [...title];
          titleArray.splice(titleNum,1)
          let countArray = [...count];
          countArray.splice(titleNum,1)
          let bestArray = [...bestCount];
          bestArray.splice(titleNum,1)
          let dateArray = [...date];
          dateArray.splice(titleNum,1)

          setTitle(titleArray)
          setCount(countArray);
          setBestCount(bestArray);
          setDate(dateArray)
        }}>
        삭제
      </button>
     </div>
  )
}


export default Modal