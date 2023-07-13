import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 신발 추천', '한남동 카페 추천', '성수동 맛집 추천', '이달의 영화 추천']);
  let [따봉, 따봉변경] = useState([0,0,0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  // 인풋값 저장 '' 빈문자

  return (
    <div className="App">
      <div className="black-nav">
        <h4>HEE BLOG</h4>
      </div>

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(!modal); setTitle(i) }}>{ 글제목[i] }
              <span onClick={(e)=>{
                e.stopPropagation();
                // 이벤트 버블링 막기
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
              }}>🩵</span> { 따봉[i] }
              {/* 삭제기능 splice 0, 1 -> 첫번째 글 1, 1 두번째글 / i, 1*/}
              <button onClick={(e)=>{
                e.stopPropagation();
                // 이벤트 버블링 막기
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy)
              }}>삭제</button>
              </h4>
              <p>6월 15일 발행</p>
            </div>
          )
        })
      }

      {/* input 입력시 코드 실행하고 싶으면 onChange / onInput */}
      {/* input 입력값 가져오기 e.target.value로 입력값 저장하기 state*/}
      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }} />

      {/* 글발행 array로 추가하기 unshift : 글제목 state에 맨앞에 끼워넣기 */}
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글발행</button>

      {
        modal == true ? <Modal title={title} 글제목={글제목} /> : null
      }
    </div>
  );
};

function Modal(props){
  return(
    <div className='modal'>
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
};

export default App;
