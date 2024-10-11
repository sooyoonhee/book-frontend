import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'// 페이지 이동 관련
import { Router, useParams } from 'react-router-dom';

const UpdateForm = (props) => {//props
    // useParams : React Router에서 제공하는 훅
    //url 경로에 있는 매개변수를 가져오는 데 사용
    const propsParam = useParams();
    const id = propsParam.id;
    console.log(41, id);

    let navigate = useNavigate();//함수를 변수로 저장
    //저장을 위한 
    const [book, setBook] = useState({// 상태 변수
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

    // id를 가지고 책 정보를 조회
    useEffect(()=>{
        console.log("@# UpadteForm useEffect 호출");

        Axios.get("http://localhost:8181/book/"+id)
        .then(response=>{
          console.log("@# data=>", response.data);
          setBook(response.data);
        })
        .catch(error=>{
          console.error("Request failed:",error);
        })

    // })
  // 초기값 없을 때 무한 반복
  },[]);//초기값 설정


    const submitBook=(e)=>{
      //submit action 금지
      e.preventDefault();
      Axios.put("http://localhost:8181/book/"+id, book)
        .then(response => {
          // 성공적인 응답 처리
          console.log(response.data)
          if (response != null) {
            // 홈으로 이동
            alert("책 수정에 성공하였습니다.");
            navigate("/");
          } else {
  
            alert("책 수정에 실패하였습니다.");
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
            <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name='title'value={book.title}/>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Author" onChange={changeValue} name='author' value={book.author}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
}

export default UpdateForm