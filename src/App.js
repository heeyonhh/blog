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

      <button onClick={()=>{

        let arr = [1, 2, 3];
        //array/object담은 변수엔 화살표만 저장됨 123은 미지의 공간 ram에 저장됨
        //state변경함수 기존state = 신규state경우 변경 안해줌

        //arry object다룰 때 원본은 보존하는게 좋음
        //console.log(copy == a) true 그래서 변경이 안됨 기존 state에서 변경이 안됬다고 생각해서 : reference data type 더공부하기
        //object도 마찬가지임 ... : 괄호 벗겨 주세요 괄호 씌워주세요 이러면 화살표도 달라짐 -> 새로운 스테이트로 이해해서 변경됨

        //기존 state가 array, object data면 stata수정할때 독립적 카피본을 만들어서 수정하자! : shallow copy
        let copy = [...a];
        copy[0] = '여자 코트 추천';
        b(copy);
      }}>글수정</button>

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
