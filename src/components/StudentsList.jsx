import { Button, Container, Table } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { fetchStudents } from "../services/StudentService";

export function StudentsList() {

    const [students, setStudents] = useState([]);

    async function populateStudentState() {
        try {
            const data = await fetchStudents();
            setStudents(data.students);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        populateStudentState();
    }, []);

    return (
        <Container>
            <Header text="List of all the students"></Header>
            <Table className="mt-4">
                <thead>
                    <tr>
                        <th>Roll</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Gender</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((s)=>{
                            return (
                                <tr>
                                    <td>{s.roll}</td>
                                    <td>{s.name}</td>
                                    <td>{s.marks}</td>
                                    <td>{s.gender}</td>
                                    <td>
                                        <Button variant="danger">Delete</Button> &nbsp;&nbsp;&nbsp;
                                        <Button variant="primary">Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}