import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

function Login () {
    // Tab Changing
    const [activeTab, setActiveTab] = useState('login');

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
                            style={{ color: 'var(--white)', fontWeight: 'bold'}}>
                                Login
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                            className='sm-2'
                            eventKey="signup" 
                            onClick={() => handleTabChange('signup')}
                            style={{ color: 'var(--white)', fontWeight: 'bold'}}>
                                Sign Up
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body>
                    {activeTab === 'login' && (
                        <Form>
                            <Form.Group className="mb-3" controlId="loginForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="loginForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Login</Button>
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
                            <Button className='buttons' type="submit">Sign Up</Button>
                        </Form>
                    )}
                </Card.Body>

            </Card>
        </div>
    )
}

export default Login;
