/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let user = 'Hoseong In'
  // react에서 변수처럼 자료를 보관할 수 있는 state문법
  let [count, setCount] = useState(0);
  let [click, setClick] = useState([0,0,0]);
  // 변수에 들어있는 데이터 html에 넣기
  // jsx 중괄호 문법사용
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array
  let [title, settitle] = useState(["DW아카데미 503호", 'DW아카데미 501호', 'DW아카데미 502호']);
  let [name, setName] = useState(['인호성', '김승빈', '여상현'])
  let [spl , setSpl] = useState(['HOSEONG', 'IN', 'HAHA'])
  // console.log(newTitle)
  // const style = {
  //   backgroundColor : 'blue', 
  //   fonSize : '24px',
  //   fontWeight : 'bold',
  //   // width : '100px',
  //   // height: '100px'
  // }; 
  // let [color, setColor] = useState()                            //(1)
  let [color, setColor] = useState('white')                        //(2)
  let changeBg = () => {
    let newBg = color == 'white'? 'dodgerblue' : 'white';          //(3)
    setColor(newBg)
  }

  //map함수가 array의 갯수만큼 return을 반복한다.
  // 매개변수(파라미터)를 만들어주면 함수 파라미터가 array자료 안에 있는 데이터가 된다.
  // [1,2,3].map(function(num){
  //   return console.log(num)
  // })

  // let num = [1,2,3,4,5];
  // let newNum = num.map((num)=> num + 1)
  // let nnewNum = newNum.map((newNum)=> newNum *3)
  // console.log(newNum)
  // console.log(nnewNum)

  let num = [1,2,3,4,5];
  let newArr = num.map(function(e){
    return e *3
  })
  console.log(newArr)
 

  // for(let i = 0; i <=num.length; i++) {
  //   num[i] = num[i] * 3;
  // }
  // console.log(num)

  
  return (
    <div className="App" style={{backgroundColor:color}}>
    {/* <div className="App" style={{backgroundColor:color?'dodgerblue':'white'}}> */}
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

        {title.map(function(a, c) {
          return (
            <div className='title' key={a}>
            <h4>{a}</h4>
            <span onClick={() => {
              let copy = [...click];
              copy[c] += 1;
              setClick(copy);
            }}>👍{click[c]}</span>
            <p>안녕하세요 저는 {name[c]}입니다.</p>
          </div>
          )
        })}
        
       {/* <div className='title'>
        <h4>{title[0]}</h4>
        <span onClick={() => {setClick(click + 1)}}>👍{click}</span>
        <p>안녕하세요 저는 인호성입니다.</p>
       </div>

       <div className='title'>
        <h4>{title[1]}</h4>
        <span onClick={() => {setClick(click + 1)}}>👍{click}</span>
        <p>안녕하세요 저는 인호성입니다.</p>
       </div> */}

       {/* <div className='title'>
        <h4>{title[2]}</h4>
        <span onClick={() => {setClick(click + 1)}}>👍{click}</span>
        <button onClick={() => {setClick(click + 1)}}>Click Me</button>
        <p>안녕하세요 저는 인호성입니다.</p>
       </div> */}

       <button onClick={() => {
        let copy = [...title]
        copy[0] = '리액트 너무 재밌어요!';
        copy[1] = '리액트 너무 어려운걸요~';
        copy[2] = '매일 복습해야겠어요';
        settitle(copy)
       }}>글 제목 변경</button>
       
       <button onClick={()=> {
        let copy = [...title];
        copy = copy.sort();
        settitle(copy);
       }}>글정렬</button>

       {/* <button onClick={() => {
        setColor(!color)                                           //(1)
        setColor(color =='white'? 'dodgerblue':'white')            //(2)
       }}>색 변경</button> */}
                                                                  
       <button onClick={changeBg}>색 변경</button>   

       <button onClick={()=> {
        let copy = [...name];
        copy = ['김승빈', '여상현', '인호성']
        setName(copy)
       }}>이름 변경</button> 

       {/* {
        ['hoseong', 'In', 'haha'].map(function(a){
          return a.toUpperCase();
        })
       }   */}
        <p>{spl}</p>
        <button onClick={()=> {
        setSpl(spl.map(C => C.toLowerCase()));
        }}>대문자 변경</button>

    </div>
  );
}

export default App;
