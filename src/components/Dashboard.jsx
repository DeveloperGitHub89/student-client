import { Container } from "react-bootstrap";
import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";

export function Dashboard() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Header text="Welcome to student CRUD app"></Header>
                <p>Using this app you can add student, remove student, search a specific student and update student</p>
            </Container>
        </>

    );
}