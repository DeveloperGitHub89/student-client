import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { StudentsList } from "./components/StudentsList";
import { StudentRegistrationForm } from "./components/StudentRegistrationForm";
import { StudentEditForm } from "./components/StudentEditForm";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { RedirectIfLoggedIn } from "./components/RedirectIfLoggedIn";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<RedirectIfLoggedIn><Login/></RedirectIfLoggedIn>}></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
        <Route path="/students-list" element={<PrivateRoute><StudentsList/></PrivateRoute>}></Route>
        <Route path="/student-registration" element={<PrivateRoute><StudentRegistrationForm/></PrivateRoute>}></Route>
        <Route path="/edit/:roll" element={<PrivateRoute><StudentEditForm/></PrivateRoute>}></Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
