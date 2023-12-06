import axios from "axios";


export async function fetchStudents(){
    try {
        const response=await axios.get("http://127.0.0.1:4900/student");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveStudent(studentData){
    try {
        const response=await axios.post("http://127.0.0.1:4900/student",studentData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}