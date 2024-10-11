import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// const BookItem = () => {
// props : 단방향 통신, 부모 컴포넌트에서 전달된 속성(데이터)를 받는 객체
const BookItem = (props) => {
  const {id, title, author} = props.book;
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        {/* <Card.Title>제목1</Card.Title> */}
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
        {/* <Button variant="primary">상세보기</Button> */}
        <Link to={"/book/"+id} className='btn btn-primary'>상세보기</Link>
      </Card.Body>
    </Card>
  );
}

export default BookItem