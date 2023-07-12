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
        modal == true ? <Modal color={'skyblue'} 글제목={글제목}/> : null
      }
      
    </div>
  );
};

function Modal(props){
  return(
    <div className='modal' style={{background: props.color}}>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

//모든 변수는 탈출 불가 : props문법 쓰기
//app : 부모 modal : 자식 부모 -> 자식으로 전송
//1.<부모 컴포넌트 작명={state이름}
//2.props 파라미터 등록 후 props.작명

export default App;
