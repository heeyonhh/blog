# REACT STUDY👩🏻‍💻


## 0710

- JSX 문법 1. html에 class 넣을 땐 className

- JSX 문법 2. 변수를 html에 꽂아넣을 때는 {중괄호} : 데이터바인딩

href, id, className, src 등 여러가지 html 속성들에도 가능

- JSX 문법 3. html에 style속성 style={ {color : 'blue', fontSize : '30px'} }

{}안에 {}자료형으로 집어넣기 / fontSize 대쉬기호 쓸 수 없음 대문자로 치환


- 중요한 데이터를 저장할 땐 변수 대신 state

import {useState} from 'react' 

useState('보관할 자료')

let [a,b] = useState('보관할 자료');

자바스크립트 destructuring 문법 : let [name, age] = ['Kim', 20]

로고 같은 변경되지 않은 데이터는 변수로 / state는 변동사항이 생기면 html 자동 재렌더링 / 스무스하게 동작함


/ * eslint-disable * / eslint 기능 끄기


- onClick 이벤트 핸들러

< div onClick={ function(){ 실행할코드 } }> / < div onClick={ () => { 실행할코드 } }>

클릭시 뭔가 실행하려고 할때 state 변경함수 b 를 꼭 사용 onClick={()=>b(a+1)}

기존값은 보존해주는 식으로 코드짜는게 좋은관습

    <button onClick={ ()=>{ 
  
      let copy = [...a];
      
      copy[0] = '여자코트 추천';
      
      b(copy)
      
    } }> 수정버튼 </button>

state 변경함수 동작원리 : array/object 동작원리 javascript reference data type

... : spread operator array나 object 자료형 왼쪽에 붙이며 괄호를 벗겨주세요 ...[1,2,3]

독립적인 사본 shallow copy / deep copy 해주기



## 0711

- fragment 문법 : <div></div> -> <></>

- Component 문법 : HTML을 깔끔하게 한 단어로 치환해서 원하는 곳에 꽂아넣을 수 있음 <Modal />

주의점 : 작명 영어대문자 / html 병렬 태그 x

function App(){} 내부에서 만들면 안됨 (컴포넌트 안에 컴포넌트 불가)

function Modal(){
  return ( <div></div> )
}

=

let Modal = () => {
  return ( <div></div>) 
} (const 써도 됨)

Component : 사이트에 반복해서 출현하는 HTML 덩어리를 컴포넌트 화 하면 좋음

내용이 자주 변경되는 HTML / 다른 페이지 / 팀원과 협업할때 Component 단위로 작업 분배

단점 : 수백개 만들면 관리힘듬 (한 펑션 안에 있는 변수를 다른 펑션에서 맘대로 쓸 수 없음) 꼭 필요한 곳만 Component로

- 동적인 UI : 1. html css로 미리 UI 디자인을 다 해놓고

2. UI의 현재 상태를 state로 저장 let [modal, setModal] = useState(false);

3. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성 modal == true ? <Modal></Modal> : null

state : 스위치 / <Modal> : 전등 / 리액트환경에선 html을 직접 조작하지 않음

setModal(!modal) ! 우측 자료를 반대로 바꿔줌

function App (){

  let [modal, setModal] = useState(false);
  return (
    <div>
      (생략)
      <button onClick={ ()=>{ setModal(!modal) } }> {글제목[0]} </button>
      { 
         modal == true ? <Modal></Modal> : null
      }
    </div>
  )
}

- map 함수 : 기능 1. array에 들어있는 자료 갯수 만큼 코드 반복 실행 해줌

기능 2. 콜백함수에 파라미터 아무렇게나 작명하면 그 파라미터는 어레이 안에 있던 모든 자료를 하나씩 출력

[ <div>안녕</div>, <div>안녕</div>, <div>안녕</div> ]

function App (){
  return (
    <div>
      (생략)
      { 
        글제목.map(function(){
          return (
          <div className="list">
            <h4>{ 글제목[0] }</h4>
            <p>2월 18일 발행</p>
          </div> )
        }) 
      }
    </div>
  )
}

비슷한 html 여러개 필요하면 map() 안에 담으면 됨

반복된 HTML에 각각 다른 제목을 부여

function App (){
  return (
    <div>
      (생략)
      { 
        글제목.map(function(a){
          return (
          <div className="list">
            <h4>{ a }</h4>
            <p>2월 18일 발행</p>
          </div> )
        }) 
      }
    </div>
  )
}

a 파라미터는 map이 반복될때마다 array자료 안에 있던 하나하나의 데이터들을 의미

map 반복문으로 반복생성한 html엔 key={i} 이런 속성을 추가


## 0711

- props 문법
