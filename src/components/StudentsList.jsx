import { Button, Container, Modal, Table } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { deleteStudent, fetchStudents } from "../services/StudentService";
import { useNavigate } from "react-router-dom";

export function StudentsList() {

    const [students, setStudents] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedRoll,setSelectedRoll] = useState("");
    const navigate = useNavigate();

    const openModalDialog = () => {
        setShowDialog(true);
    }
    const closeModalDialog = () => {
        setShowDialog(false);
    }

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

    const handleStudentDelete = async () => {
        try {
            await deleteStudent(selectedRoll);
            populateStudentState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Header text="List of all the students"></Header>
            {students.length !== 0 ? <Table className="mt-4">
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
                        students.map((s) => {
                            return (
                                <tr>
                                    <td>{s.roll}</td>
                                    <td>{s.name}</td>
                                    <td>{s.marks}</td>
                                    <td>{s.gender}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => {
                                            openModalDialog();
                                            setSelectedRoll(s.roll);
                                        }}>Delete</Button> &nbsp;&nbsp;&nbsp;
                                        <Button variant="primary" onClick={()=>{
                                            navigate(`/edit/${s.roll}`)
                                        }}>Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> : <p>No students found...!</p>}

            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete student with roll {selectedRoll}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                        handleStudentDelete();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}