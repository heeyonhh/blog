/*eslint-disable*/ 

import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 신발 추천', '한남동 카페 추천', '성수동 맛집 추천', '이달의 영화 추천']);
  let [따봉, 따봉변경] = useState([0,0,0,0,0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>HEE BLOG</h4>
      </div>

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(true)}}>{ 글제목[i] } <span onClick={()=>{
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
              }}>🩵</span> { 따봉[i] } </h4>
              <p>6월 15일 발행</p>
            </div>
          )
        })
      }
      
      {
        modal == true ? <Modal 글제목변경={글제목변경} 글제목={글제목}/> : null
      }
    </div>
  );
};

function Modal(props){
  return(
    <div className='modal' style={{background: props.color}}>
      <h4 id='name'>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        props.글제목변경(['여자코트 추천', '강남 맛집 추천', '파이썬 독학', '성수동 맛집 추천', '이달의 영화 추천'])
      }}>글수정</button>
    </div>
  );
};

//변수 뿐만 아니라 state도 props 전송 가능

export default App;
