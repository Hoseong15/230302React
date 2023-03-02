/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let user = 'Hoseong In'
  // react에서 변수처럼 자료를 보관할 수 있는 state문법
  let [count, setCount] = useState(0);
  let [click, setClick] = useState(0);
  // 변수에 들어있는 데이터 html에 넣기
  // jsx 중괄호 문법사용
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array
  let [title, settitle] = useState(["DW아카데미 503호", 'DW아카데미 501호', 'DW아카데미 502호']);
  // const style = {
  //   backgroundColor : 'blue', 
  //   fonSize : '24px',
  //   fontWeight : 'bold',
  //   // width : '100px',
  //   // height: '100px'
  // }; 
  
  return (
    <div className="App">
       {/* <div className='box' style={style}>zdzd</div>
       <input type="text" />
       <div style={{color:'red', backgroundColor: 'gray', width:'100px', height:'200px'}}>안녕하세요?</div> */}
       <h1>Hello, {user}!</h1>
       <p>This is a React App</p>

       <div>
        <p>클릭시 + {count}</p>

        <button onClick={()=>{
          setCount(count + 1)
        }}>Click Me</button>

       </div>

       <div className='title'>
        <h4>{title[0]}</h4>
        <span onClick={() => {setClick(click + 1)}}>👍{click}</span>
        <p>안녕하세요 저는 인호성입니다.</p>
       </div>

       <div className='title'>
        <h4>{title[1]}</h4>
        <span onClick={() => {setClick(click + 1)}}>👍{click}</span>
        <p>안녕하세요 저는 인호성입니다.</p>
       </div>

       <div className='title'>
        <h4>{title[2]}</h4>
        <span onClick={() => {setClick(click + 1)}}>👍{click}</span>
        <button onClick={() => {setClick(click + 1)}}>Click Me</button>
        <p>안녕하세요 저는 인호성입니다.</p>
       </div>

       <button onClick={() => {
        let copy = [...title]
        copy[0] = '리액트 너무 재밌어요!';
        copy[1] = '리액트 너무 어려운걸요~';
        copy[2] = '매일 복습해야겠어요';
        settitle(copy)
       }}>글 제목 변경</button>
       
       <button onClick={()=> {
        let copy = [...title]
        copy = copy.sort()
        settitle(copy)
       }}>글정렬</button>

       <button onClick={()=> {
        let copy = [...title]
        copy[0] = '이걸 한방에 못바꾸나';
        copy[1] = '하나하나씩 다시 쳐야하나';
        copy[2] = '넘 귀찮은데';
        settitle(copy)
       }}>Click Me</button>

    </div>
  );
}

export default App;
