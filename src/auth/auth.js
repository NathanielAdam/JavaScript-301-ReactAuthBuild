import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './auth.css'
import Signup from './signup';
import Login from './login';

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup setToken={props.setToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;