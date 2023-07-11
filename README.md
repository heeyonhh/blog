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


/*eslint-disable*/ eslint 기능 끄기


onClick 이벤트 핸들러

<div onClick={ function(){ 실행할코드 } }> / <div onClick={ () => { 실행할코드 } }>

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
