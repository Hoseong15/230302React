import React, { useRef } from "react";
import Comment from "./Comment";
import {useState} from 'react';

const comments = [
  {
    name : '인호성',
    comment : '오우 리액트'
  },
  {
    name : '김승빈',
    comment : '리액트 재밌다~'
  },
  {
    name : '김상현',
    comment : '리액트 열받네'
  }
]

function CommentList() {
  const [commentList, setCommentList] = useState(comments);

  // input 선생님 // 
  const [name , setName] = useState('');
  const [content , setContent] = useState('');

  const deleteComment = (index) => {
    const newCommnetList =[...commentList];
    newCommnetList.splice(index, 1)
    setCommentList(newCommnetList)
  }

  /////// 추가 버튼 클릭했을 때 박스 /////
  const addComment = () => {
   // name, content value값이 없을 때
   name === '' || content === '' ? alert('이름과 댓글을 입력하세요') : (
    (() => {
      // const add = {name : '여상현', comment : '리액트 어렵다~~!' }
    // setCommentList([add, ...commentList])
    const add = {name : name, comment : content}
    setCommentList([add, ...commentList])
    // state변경 함수에 빈 문자열을 넣어서 input에 작성된 내용을 초기화
    setName('');
    setContent('');
    })()
   )
  };

  
  // input에 입력했을 때 나오게 하는것 ////
  const [idValue, setId] = useState();
  const [pwValue, setPw] = useState();

  const saveId = (e) => {setId(e.target.value)}
  const savePw = (e) => {setPw(e.target.value)}
  
  const addtyping = () => {
    idValue === '' || pwValue === '' ? alert('입력하고 다시 클릭하쇼') : (
      (() => {
        const typing = [...commentList, {name : idValue, comment : pwValue}]
        setCommentList(typing)
        setId('')
        setPw('')
      })()
    )
  }


  return (
    <div>
      {
        commentList.map((comment, i) => {
          return (
            <Comment name={comment.name} comment={comment.comment} key={i} onDelete={() => deleteComment(i)}/>
          )
        })
      }
      {/* onChange 이벤트는 input 요소에서 값이 변경될 때 발생 
          그 때 발생한 이벤트를 매개변수 e */}
      이름 : <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
      댓글 : <input type="text" value={content} onChange={(e)=> setContent(e.target.value)} />
      <button onClick={addComment}>추가</button>
   
      {/* input에 입력했을 때 나오게 하는것 */}
      <div>이름: <input onChange={saveId} type="text" value={idValue} /></div>
      <div>댓글: <input onChange={savePw} type="text" value={pwValue} /></div>
      <button onClick={addtyping}>글쓰기</button>

    </div>
  )
}


export default CommentList;

   
