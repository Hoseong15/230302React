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

  const deleteComment = (index) => {
    const newCommnetList =[...commentList];
    newCommnetList.splice(index, 1)
    setCommentList(newCommnetList)
  }

  /////// 추가 버튼 클릭했을 때 박스 /////
  const addComment = () => {
    const add = {name : '여상현', comment : '리액트 어렵다~~!' }
    setCommentList([add, ...commentList])
  }
  

  ///// input에 입력했을 때 나오게 하는것 ////
  const [idValue, setId] = useState();
  const [pwValue, setPw] = useState();

  const saveId = (e) => {
    setId(e.target.value)
  }
  const savePw = (e) => {
    setPw(e.target.value)
  }
  
  const addtyping = () => {
    const typing = [...commentList, {name : idValue, comment : pwValue}]
    setCommentList(typing)
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
      <button onClick={addComment}>추가</button>
      <p>이름: <input onChange={saveId} type="text" value={idValue} /></p>
      <p>댓글: <input onChange={savePw} type="text" value={pwValue} /></p>
      <button onClick={addtyping}>글쓰기</button>
    </div>
  )
}


export default CommentList;
