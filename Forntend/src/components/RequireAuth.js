import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth.roles);
    console.log(allowedRoles);
    console.log(auth?.roles?.includes(2001))
    return(
        auth?.roles?.find(role => allowedRoles?.includes(role))
      ? <Outlet />
      : auth?.roles?.includes(2001)
          ? <Navigate to="/unauthorized" state={{ from: location }} replace />
          : <Navigate to="/login" state={{ from: location }} replace />
); 
}

export default RequireAuth;

