import React, { useRef } from 'react'
import {useState} from 'react';
// import './Comment.css';


const styles = {
  wrapper : {
    display : 'flex',
    margin: '8px',
    padding : '8px',
    border : '1px solid #ccc',
    borderRadius : '16px',
  },

  image : {
    width : '50px',
    height: '50px',
    borderRadius : '50%',
  },

  contentContainer : {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    marginLeft : '8px',
  },

  nameText : {
    fontSize : '18px',
    fontWeight : 'bold',
  },

  commentText : {
    fontSize : '14px',
  }
}




// const Comment = (props) => {
//   return (
//     <div className='comment'>
//       <img src="/totoro.jpg" alt="" className="logo" />
//       <div className='text'>
//         <h1>{props.name}</h1>
//         <p>{props.text}</p>
//       </div>
//     </div>
//   )
// }

// export default Comment



function Comment(props) {
  console.log(props)
  return (
    <div className='wrapper' style={styles.wrapper}>
      <div className='img-box' >
        <img style={styles.image} src="/totoro.jpg" alt="logo" />
      </div>

      <div className='content-container' style={styles. contentContainer}>
        <span className='name-text' style={styles.nameText}>{props.name}</span>
        <span className='comment-text' style={styles.commadText}>{props.comment}</span>
      </div>
      <button onClick={props.onDelete}>X</button>
    </div>
    
  )
}
export default Comment;


