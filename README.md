젖# REACT STUDY👩🏻‍💻


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


    /* eslint-disable */ eslint 기능 끄기


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

- fragment 문법 :
  
    < div>< /div> -> <></>

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

- 동적인 UI :

1. html css로 미리 UI 디자인을 다 해놓고

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

      글제목.map(function(a, i){
          return (
            <div className="list">
              <h4>{ a }</h4>
            <div className="list" key={i}>
              <h4>{ 글제목[i] } <span onClick={()=>{
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
              }}>🩵</span> { 따봉[i] } </h4>
              <p>6월 15일 발행</p>
            </div>
          )

## 0712

- props 문법 : 부모 컴토넌트에 있던 state -> 자식 컴포넌트 전송

  1. 자식 컴포넌트 사용하는 곳 <작명={state이름} /> / 작명 = state이름 똑같이 하는 편

  2. 자식 펑션에 props파라미터 등록 후 { props.작명[0] }

props : 10개, 1000개 무한 전송 가능 변수, 함수 전송 가능

자식 -> 부모 전송 불가능 /  옆집 컴포넌트 전송 불가능

        <Modal color={'skyblue'} />
        
        style={{ background : props.color }}

- 글제목 동적 ui (모달) state props 활용으로 바꾸기

        function App (){
          let [title, setTitle] = useState(0);
          (생략)
          {
            modal == true ? <Modal title={title} 글제목={글제목} /> : null
          }
        }
        
        function Modal(props){
          return (
            <div className="modal">
              <h4>{ props.글제목[props.title] }</h4>
              <p>날짜</p>
              <p>상세내용</p>
            </div>
          )
        }

- 글 클릭했을때

        function App (){
          return (
            <div>
              { 
                글제목.map(function(a, i){
                  return (
                  <div className="list">
                    <h4 onClick={()=>{ setModal(true); setTitle(i); }}>{ 글제목[i] }</h4>
                    <p>2월 18일 발행</p>
                  </div> )
                }) 
              }
            </div>
          )}

- 다양한 컴포넌트에서 쓰이는 state는 최고 부모에 만들어놔야 함



## 0713


- input 사용자가 입력한 글 다루기

    <input type="text"/>
    <input type="range"/>
    <input type="date"/>
    <input type="number"/>
    <textarea></textarea>
    <select></select>

- onChange, onInput : < input >에 뭔가 입력시 코드를 실행

    <input onChange={()=>{ 실행할코드 }}/>

e.target : 현재 이벤트가 발생한 곳 알려줌

e.preventDefault() : 이벤트 기본 동작 막기

e.stopPropagation() : 이벤트 버블링 막기

- e.target.value : < input >에 입력한 데이터 저장하기

    function App (){

      let [입력값, 입력값변경] = useState('');
      return (
        <input onChange={(e)=>{ 
          입력값변경(e.target.value) 
          console.log(입력값)
        }} />
      )}

- unshift 문법 : 버튼 이벤트 입력한 글 글목록 추가 / 스위치와 전등 만들고 state 만지기

    function App (){
      let [글제목, 글제목변경] = useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
      let [입력값, 입력값변경] = useState('');
      return (
        <div>
          <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />
          <button onClick={()=>{ 
            let copy = [...글제목];
            copy.unshift(입력값);
            글제목변경(copy)
          }}>글발행</button>
        </div>
      )
    }

1. 버튼 이벤트 array 문법 카피

2. copy.unshift(입력값); 맨 앞에 자료 추가하는 문법

3. 글제목변경(copy) 스테이트 변경함수

- splice 문법 : x번째 데이터 삭제

    function App (){
      let [글제목, 글제목변경] = useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
      let [입력값, 입력값변경] = useState('');
      return ( 
        <div>
        { 
         글제목.map(function(a, i){
            return (
              <div className="list">
                <h4>{ 글제목[i] }</h4>
                <p>2월 18일 발행</p>
                <button onClick={()=>{ 
                  let copy = [...글제목];
                  copy.splice(i, 1);
                  글제목변경(copy);
               }}>삭제</button>
              </div> 
            )
         }) 
        }  
      </div>
      )}

1. state 카피

2. copy.splice(i, 1); 인덱스, 1번째 데이터 삭제

3. 글제목변경(copy);


- build : 브라우저 친화적인 HTML CSS JS 파일로 바꾸기

build/index.html 파일 전송

하위 경로에 배포하고 싶으면 package.json > "homepage": "http://__/blog", 추가

리액트 라우터가 설치 되어있다면 라우터가 제공하는 basename="" 속성을 추가

https://create-react-app.dev/docs/deployment/#building-for-relative-paths 참고

npm run build

build 폴더 안에 안에 있는 내용을 모두 서버에 올리기 index.html 가 메인페이지
