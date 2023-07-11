import { useState } from 'react';
import './App.css';

function App() {

  let [a, b] = useState(['남자 코트 추천', '여자 신발 추천', '한남동 카페 추천', '성수동 맛집 추천', '이달의 영화 추천']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  // 스위치 역할
  // ui 현재 상태를 state로 저장 (모달창 상태 표현 true false)

  return (
    <div className="App">
      <div className="black-nav">
        <h4>HEE BLOG</h4>
      </div>

      <button onClick={()=>{
        let copy = [...a];
        copy.sort();
        b(copy);
      }}>정렬</button>

      <button onClick={()=>{
        let copy = [...a];
        copy[0] = '여자 코트 추천';
        b(copy);
      }}>글수정</button>

      <div className="list">
        <h4>{ a[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>🩵</span> {따봉} </h4>
        <p>7월 10일 발행</p>
      </div>

      <div className="list">
        <h4>{ a[1] }</h4>
        <p>7월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{ a[2] }</h4>
        <p>7월 2일 발행</p>
      </div>
      <div className="list">
        <h4>{ a[3] }</h4>
        <p>6월 15일 발행</p>
      </div>
      <div className="list">
        <button onClick={()=>{ setModal(!modal) }}>{ a[4] }</button>
        <p>6월 7일 발행</p>
      </div>

      {/* html 중간에 조건문 쓰려면 삼항연산자 / 모달 컴포넌트 state 삼항연산자로 짜기 */}
      {/* 기계 역할 */}
      {
        modal == true ? <Modal/> : null
        // 1 == 1 ? '맞음' : '아님'
      }
    </div>
  );
};

function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

//동적인 UI 만드는 step
//html css로 미리 디자인완성
//ui의 현재 상태를 state로 저장
//state에 따라 UI가 어떻게 보일지 작성
//조건문 등으로

//리액트에선 버튼 누르면 모달창 스위치만 건드림
//자바스크립트였으면 버튼 누르면 모달창 html을 직접 건드림

export default App;
