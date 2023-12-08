import axios from "axios";
import { BASE_URL } from "./APIConstants";
import { getToken } from "../utils/TokenUtil";


export async function fetchStudents(){
    try {
        const response=await axios.get(`${BASE_URL}/student`,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveStudent(studentData){
    try {
        const response=await axios.post(`${BASE_URL}/student`,studentData,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteStudent(roll){
    try {
        const response=await axios.delete(`${BASE_URL}/student/${roll}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchStudentByRoll(roll){
    try {
        const response=await axios.get(`${BASE_URL}/student/${roll}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateStudent(updatedData,roll){
    try {
        const response=await axios.put(`${BASE_URL}/student/${roll}`,updatedData,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}