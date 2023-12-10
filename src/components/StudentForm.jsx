import { Alert, Button, Col, Container, Form as BsForm, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import { saveStudent } from "../services/StudentService";
import { NavigationBar } from "./NavigationBar";
import { Formik, Form, Field } from "formik";
import { StudentRegistrationSchema } from "../validation-schema/StudentValidationSchema";
export function StudentForm() {

    return (
        <>
            <NavigationBar />
            <Container>
                <Header text="New Registration form"></Header>
                <Formik initialValues={{ roll: "", name: "", marks: "", gender: "" }}
                    validationSchema={StudentRegistrationSchema}
                    onSubmit={(values) => {
                        // call post api 
                        console.log(values);
                    }}
                >
                    {
                        (formik) => {
                            const { values, errors, touched, isValid, dirty, handleChange } = formik;
                            return (
                                <>
                                <Form>
                                    <Row>
                                        <Col lg={4}>
                                            <BsForm.Group className="mb-3">
                                                <BsForm.Label>Roll</BsForm.Label>
                                                <Field id="roll" name="roll" placeholder="Enter roll" className="form-control" />
                                                {/* <BsForm.Control type="text" placeholder="Enter roll" name="roll" value={values.roll} onChange={handleChange} /> */}
                                                {touched.roll && errors.roll?<span className="error">{errors.roll}</span>:null}
                                            </BsForm.Group>
                                        </Col>
                                        <Col lg={4}>
                                            <BsForm.Group className="mb-3">
                                                <BsForm.Label>Name</BsForm.Label>
                                                {/* <BsForm.Control type="text" placeholder="Enter name" name="name" value={values.name} onChange={handleChange} /> */}
                                                <Field id="name" name="name" placeholder="Enter name" className="form-control" />
                                                {touched.name && errors.name?<span className="error">{errors.name}</span>:null}
                                            </BsForm.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={4}>
                                            <BsForm.Group className="mb-3">
                                                <BsForm.Label>Marks</BsForm.Label>
                                                {/* <BsForm.Control type="text" placeholder="Enter marks" name="marks" value={values.marks} onChange={handleChange} /> */}
                                                <Field id="marks" name="marks" placeholder="Enter marks" className="form-control" />
                                                {touched.marks && errors.marks?<span className="error">{errors.marks}</span>:null}
                                            </BsForm.Group>
                                        </Col>
                                        <Col lg={4}>
                                            <BsForm.Check
                                                type="radio"
                                                label="Male"
                                                name="gender"
                                                value="male"
                                                onChange={handleChange}
                                            />
                                            <BsForm.Check
                                                type="radio"
                                                label="Female"
                                                name="gender"
                                                value="female"
                                                onChange={handleChange}
                                            />
                                            {touched.gender && errors.gender?<span className="error">{errors.gender}</span>:null}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3}>
                                            <Button variant="primary" type="submit" disabled={!(dirty && isValid)}>Register</Button>
                                        </Col>

                                    </Row>
                                    </Form>
                                </>
                            );
                        }
                    }
                </Formik>

                
            </Container>
        </>
    );
}