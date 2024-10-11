import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'// 페이지 이동 관련

// const Detail = () => {
const Detail = (props) => {
  let navigate = useNavigate();//함수를 변수로 저장

  //실행될 때 최초 한 번 출력
  // useEffect : React 생명주기의 훅으로, 컴포넌트가 처음 렌더링될 때 한번 실행
  // useParams : React Router에서 제공하는 훅
  //url 경로에 있는 매개변수를 가져오는 데 사용
  const propsParam = useParams();
  const id = propsParam.id;
  console.log(21, id);

  // useState : React의 상태관리 훅
  // setBook : book 상태를 업데이트하는 함수
  const [book,setBook] = useState({
    id:"",
    title:"",
    author:""
  })
  /*
  useEffect(() => {
    console.log("@# Detail useEffect 호출");

    //get 방식일 땐 생략 가능
    fetch("http://localhost:8181/book/"+id)
      .then(res=>res.json())
      .then(res=>{
        console.log("@# res=>",res);
        setBook(res);
      })
  // });
  // 초기값 없을 때 무한 반복
  },[]);//초기값 설정
  */

  useEffect(() => {
    console.log("@# Detail useEffect 호출");

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

  const updateBook=()=>{
    console.log(31, id);
    navigate("/updateForm/"+id);
  }

  const deleteBook=()=>{
    console.log(32, id);
    
    Axios.delete("http://localhost:8181/book/"+id)
    .then(response=>{
      console.log("@# data=>", response.data);
      // setBook(response.data);
      navigate("/");
    })
    .catch(error=>{
      console.error("Request failed:",error);
    })
  }

  return (
    <div>
      <h1>책 상세보기</h1>
      {/* <Button variant="primary">수정</Button>{' '} */}
      <Button variant="primary" onClick={updateBook}>수정</Button>{' '}
      <Button variant="danger" onClick={deleteBook}>삭제</Button>{' '}
      <hr />
      <h3>{book.author}</h3>
      <h1>{book.title}</h1>
    </div>
  )
}

export default Detail