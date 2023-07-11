import { useState } from 'react';
import './App.css';

//실은 컴포넌트임
function App() {

  let [a, b] = useState(['남자 코트 추천', '여자 신발 추천', '한남동 카페 추천', '성수동 맛집 추천', '이달의 영화 추천']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>HEE BLOG</h4>
      </div>

      {/* 정렬 필터 */}
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
        <h4>{ a[4] }</h4>
        <p>6월 7일 발행</p>
      </div>

      {/* html 깔끔하게 쓰기 */}
      <Modal/>
      {/* <Modal></Modal> */}

      <Login/>
    </div>
  );
};

//컴포넌트 만들때 다른 펑션 바깥에 만들기 & 영어대문자
//컴포넌트 : 반복적인 html 축약할때 / 페이지 전환 / 자주 변경되는 것들
//컴포넌트를 만드는 것은 자유지만 책임이 따름 : 컴포넌트의 단점 state가져다 쓸때 문제 생김, 다른 펑션안에 있는 변수 쓸수 없음
function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    //의미 없는 <div>대신 <></>사용가능 : 프래그먼트 문법
  );
};

//컴포넌트 문법 2
// let Modal = () => {
//   return(
//     <div></div>
//   )
// }
// const 로 하면 에러메세지 띄어주는 장점이 있음

const Login = () => {
  return(
    <>
      🐻‍❄️🐻‍❄️🐻‍❄️🐻‍❄️🐻‍❄️🩵🩵🩵🩵🩵👖👖👖👖👖
    </>
  )
}

export default App;
