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
              <button onClick={()=>{
                
              }}>삭제</button>
              </h4>
              <p>6월 15일 발행</p>
            </div>
          )
        })
      }

      {/* input 입력시 코드 실행하고 싶으면 onChange / onInput */}
      {/* input 입력값 가져오기 e.target.value 저장하기 state*/}
      <input onChange={(e)=>{
        입력값변경(e.target.value);
        console.log(입력값);
      }} />
      <button onClick={()=>{

      }}>글 추가</button>

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
