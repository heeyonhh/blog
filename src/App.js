/*eslint-disable*/
//lint (워닝 메세지) 끄는 기능

import { useState } from 'react';
import './App.css';

function App() {

  let [a, b] = useState(['남자 코트 추천', '여자 신발 추천', '한남동 카페 추천']);
  let [따봉, 따봉변경] = useState(0);
  //따봉변경 state변경 함수

  // function 함수(){
  //   console.log(1);
  // };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>HEE BLOG</h4>
      </div>
      <div className="list">
        {/* onclick이벤트 핸들러 {}안에 함수 넣어야함 ()=>{} 함수 넣어도 됨*/}
        {/* state변경 등호로 변경하면 안됨 */}
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
    </div>
  );
}

export default App;
