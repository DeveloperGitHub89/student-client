import { Col, Container, Row } from "react-bootstrap";
import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";
import CanvasJSReact from '@canvasjs/react-charts';
import { useState } from "react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function Dashboard() {
    const [marksVisualizationOptions,setMarksVisualizationOptions]=useState({
        title: {
            text: "Pass to fail ratio"
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "Pass",  y: 30  },
                { label: "Fail", y: 10  }
            ]
        }
        ]
    });
   const [genderVisualizationOptions, setGenderVisualizationOptions]= useState({
        animationEnabled: true,
        title: {
            text: "Gender analytics"
        },
        subtitles: [{
            text: "Gender Ratio",
            verticalAlign: "center",
            fontSize: 20,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{gender}: {y}",
            // yValueFormatString: "#,###'%'",
            dataPoints: [
                { gender: "Male", y: 15 },
                { gender: "Female", y: 31 }
            ]
        }]
    });
    return (
        <>
            <NavigationBar />
            <Container>
                <Header text="Welcome to student CRUD app"></Header>
                <p>Using this app you can add student, remove student, search a specific student and update student</p>
            </Container>
            <Container>
                <Row>
                    <Col lg={6}>
                        <CanvasJSChart options = {genderVisualizationOptions}/>
                    </Col>
                    <Col lg={6}>
                        <CanvasJSChart options = {marksVisualizationOptions}/>
                    </Col>
                </Row>
            </Container>
        </>

    );
}