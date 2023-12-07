import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import { saveStudent } from "../services/StudentService";
import { NavigationBar } from "./NavigationBar";

export function StudentRegistrationForm() {
    const [formData,setFormData]=useState({roll:"",name:"",marks:"",gender:""});
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           const result= await saveStudent(formData);
           setFormData({roll:"",name:"",marks:"",gender:""});
           setIsSubmitted(true);
           setTimeout(()=>{
            setIsSubmitted(false);
           },1500);
           console.log(result.message);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <NavigationBar/>
        <Container>
            <Header text="Register student here"></Header>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Roll</Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.roll:null} placeholder="Enter roll" name="roll" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Marks</Form.Label>
                            <Form.Control type="text" placeholder="Enter marks" name="marks" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Register</Button>
                    </Col>
                    
                </Row>
            </Form>
            <Row className="mt-3">
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">Student Registered</Alert>:null}
                </Col>
            </Row>
        </Container>
        </>
    );
}