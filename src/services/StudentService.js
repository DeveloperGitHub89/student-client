import axios from "axios";
import { BASE_URL } from "./APIConstants";


export async function fetchStudents(){
    try {
        const response=await axios.get(`${BASE_URL}/student`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveStudent(studentData){
    try {
        const response=await axios.post(`${BASE_URL}/student`,studentData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteStudent(roll){
    try {
        const response=await axios.delete(`${BASE_URL}/student/${roll}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchStudentByRoll(roll){
    try {
        const response=await axios.get(`${BASE_URL}/student/${roll}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateStudent(updatedData,roll){
    try {
        const response=await axios.put(`${BASE_URL}/student/${roll}`,updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}