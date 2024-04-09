import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import Hero from './Hero';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [activeTab, setActiveTab] = useState('login');

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Check if email and password are not empty
        if (!email || !password) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        // Check if email and password match predefined credentials
        if (email === 'example@example.com' && password === 'password') {
            // Redirect to hero page upon successful login
            window.location.href = '/hero'; // Navigate to hero page
        } else {
            // Display error message for incorrect credentials
            setErrorMessage('Incorrect email or password. Please try again.');
        }
    };

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="login-page">
            <Card className="login-card" style={{ width: '25rem' }} >
                <Card.Header>
                    <Nav variant="underline" activeKey={activeTab}>
                        <Nav.Item>
                            <Nav.Link 
                            eventKey="login" 
                            onClick={() => handleTabChange('login')} 
                            style={{ color: 'black', fontWeight: 'semi-bold'}}>
                                Login
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                            className='sm-2'
                            eventKey="signup" 
                            onClick={() => handleTabChange('signup')}
                            style={{ color: 'black', fontWeight: 'semi-bold'}}>
                                Sign Up
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body>
                    {activeTab === 'login' && (
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3" controlId="loginForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required // Require email field
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="loginForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required // Require password field
                                />
                            </Form.Group>
                            {errorMessage && <div className="text-danger">{errorMessage}</div>}
                            <Button className='buttons' type="submit">Login</Button>
                        </Form>
                    )}

                    {activeTab === 'signup' && (
                        <Form>
                            <Form.Group className="mb-3" controlId="signupForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Mj Estepanie Palo" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="signupForm.ControlInput2">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="signupForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <button className='buttons' type="submit">Sign Up</button>
                        </Form>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login;
