import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { StudentsList } from "./components/StudentsList";
import { StudentRegistrationForm } from "./components/StudentRegistrationForm";
import { StudentEditForm } from "./components/StudentEditForm";
import { Login } from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/students-list" element={<StudentsList/>}></Route>
        <Route path="/student-registration" element={<StudentRegistrationForm/>}></Route>
        <Route path="/edit/:roll" element={<StudentEditForm/>}></Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
