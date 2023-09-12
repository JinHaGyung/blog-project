function Modal({setModal,modal,title,setTitle,titleNum,date,count,setCount,bestCount,setBestCount,setDate})
{ return(
    <div className="modalWrap">
      <span  onClick={()=>{setModal(!modal)}} id="modalClose"></span>
      <div className='modal'>
        <h4 className="title">{title[titleNum]}</h4>
        <span>DATA : {date[titleNum]}</span>
        <hr></hr>
        <p>상세내용</p>
        <button
        className="delete"
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
    </div>
  )
}


export default Modal