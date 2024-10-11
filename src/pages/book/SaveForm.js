import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'// 페이지 이동 관련

const SaveForm = () => {
  let navigate = useNavigate();//함수를 변수로 저장
  //저장을 위한 
  const [book, setBook] = useState({
    title:"",//초기값 없음
    author:""
  });

  //e : 이벤트 처리
  const changeValue=(e)=>{
    console.log("@# name=>"+e.target.name);
    console.log("@# value=>"+e.target.value);
    
    console.log("@# title=>"+book.title);
    console.log("@# author=>"+book.author);

    setBook({
      ...book,//구조 전개 함수?(es6)
      [e.target.name]:e.target.value
    })
  }
/*
  const submitBook=(e)=>{
    fetch("http://localhost:8181/book",{
      method:"post",
      // 정해진 포맷
      headers:{
        "Content-Type":"application/json; charset=UTF-8"
      },
      body:JSON.stringify(book)
    })
    .then(res=>res.json())
    .then((res)=>{
      console.log(12,res);
    });
  }
  */

  const submitBook=(e)=>{
    //submit action 금지
    e.preventDefault();
    Axios.post("http://localhost:8181/book", book)
      .then(response => {
        // 성공적인 응답 처리
        console.log(response.data)
        if (response != null) {
          // 홈으로 이동
          navigate("/");
        } else {

          alert("책 등록에 실패하였습니다.");
        }
      })
      .catch(error =>{
        // 오류 처리
        console.error("Request failed:",error);
      })
  }
  
  return (
    <div>
      {/* <Form> */}
      <Form onSubmit={submitBook}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name='title'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Author" onChange={changeValue} name='author'/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default SaveForm