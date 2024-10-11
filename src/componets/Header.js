import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
    // 여기 위치 : 변수, 훅(useState, useEffect) : 함수  => 변수값 저장(산태관리)
    return (// 화면 구성
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to="/" className='navbar-brand'>홈</Link>
                    <Nav className="me-auto">
                        <Link to="/joinForm" className='nav-link'>회원가입</Link>
                        <Link to="/loginForm" className='nav-link'>로그인</Link>
                        <Link to="/saveForm" className='nav-link'>글쓰기</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header