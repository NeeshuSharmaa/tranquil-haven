import { Navigate, useLocation } from "react-router";
import { useAuthContext } from "../contexts/AuthContextProvider"

export default function PrivateRoute({children}) {

    const {loggedIn}=useAuthContext();
    const location=useLocation();
  return (
    loggedIn?children:<Navigate to="/login" state={{from:location}}/>
  )
}
