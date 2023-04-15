import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../context/user"

const ProtectedRoutes = () => {

    const { couldLogin } = useContext(UserContext)

    const allowAccess = couldLogin
    return allowAccess ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes