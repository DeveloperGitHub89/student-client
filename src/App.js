import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Dashboard } from "./components/Dashboard";
import { StudentsList } from "./components/StudentsList";
import { StudentRegistrationForm } from "./components/StudentRegistrationForm";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/students-list" element={<StudentsList/>}></Route>
        <Route path="/student-registration" element={<StudentRegistrationForm/>}></Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
