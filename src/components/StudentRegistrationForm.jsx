import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";

export function StudentRegistrationForm() {
    const [formData,setFormData]=useState({roll:"",name:"",marks:"",gender:""});
    
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    return (
        <Container>
            <Header text="Register student here"></Header>

            <Form>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Roll</Form.Label>
                            <Form.Control type="text" placeholder="Enter roll" name="roll" />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Marks</Form.Label>
                            <Form.Control type="text" placeholder="Enter marks" name="marks" />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            value="male"
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            value="female"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Register</Button>
                    </Col>
                    
                </Row>
            </Form>
        </Container>
    );
}