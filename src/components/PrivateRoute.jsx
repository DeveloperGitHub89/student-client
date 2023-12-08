import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/TokenUtil";

export function PrivateRoute(props){
    
    console.log(isAuthenticated());
    if (isAuthenticated()) {
        return props.children;
    } else {
       return <Navigate to="/"></Navigate>
    }
}