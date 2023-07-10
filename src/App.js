import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  //자료 잠깐 저장할땐 변수 let var const

  let [a, b] = useState(['남자 코트 추천', '여자 신발 추천', '한남동 카페 추천']);
  //import usestate (보관할 자료) let[ a state에 보관했던 자료, start 변경 도와주는 함수 ]
  //destructuring 문법 : let num = [1, 2]; (array)
  //let [a, c] = [1, 2]; 깔맞춤 문법
  //왜 state 를 써야함 ? 변수가 변경됬을때 html 자동으로 반영, 재랜더링 자주 변경될것같은 html부분을 state로 만들어 놓기
  // let [logo, setlogo] = useState('ReactBlog'); 로고 같이 변경이 안되는 친구들은 변수 쓰면 됨

  //return 안에는 병룔로 2개이상 태그 기입 금지
  return (
    <div className="App">
      <div className="black-nav">
        <h4>HEE BLOG</h4>
      </div>
      <div className="list">
        <h4>{ a[0] }</h4>
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
