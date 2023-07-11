/*eslint-disable*/ 

import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 신발 추천', '한남동 카페 추천', '성수동 맛집 추천', '이달의 영화 추천']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>HEE BLOG</h4>
      </div>

      {/* <button onClick={()=>{
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
      
      {
        modal == true ? <Modal/> : null
      } */}

      {
        // 글제목.map(function(a, i){
        //   return (
        //     <div className="list">
        //       <h4>{ 글제목[i] }</h4>
        //       <p>6월 15일 발행</p>
        //     </div>
        //   )
        // })
        글제목.map(function(a){
          return (
            <div className="list">
              <h4>{ a }</h4>
              <p>6월 15일 발행</p>
            </div>
          )
        })
      }
      {/* map함수 : 사용법 array 뒤에 콜백 함수
      array 자료 갯수만큼 함수안의 코드 실행해줌
      함수의 파라미터는 array안에 있던 자료임
      return에 뭐 적으면 array로 담아줌
      state.map 로하면 글제목 갯수만큼 자료 생성
      i : 반복문이 돌때마다 0부터 1씩 증가하는 정수
      비슷한 html 반복 생성하려면 map()쓰자*/}
      
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

export default App;
