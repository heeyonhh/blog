import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  //서버에서 가져온 데이터라고 생각하고

  return (
    <div className="App">
      {/* JSX : 리액트에서 쉽게 쓸수있는 문법*/}
      <div className="black-nav">
        {/* <h4 id={post}>블로그임</h4> */}
        {/* css파일 안넣고 바로 style 넣을때 오브젝트 문법으로 */}
        <h4 style={ {color : 'red', fontSize : '30px'} }>블로그임</h4>
      </div>
      {/* 데이터 바인딩 : 중괄호 문법 id className 상상하는 모든 곳에 넣을 수 있음 */}
      <h4>{post}</h4>
    </div>
  );
}

export default App;
