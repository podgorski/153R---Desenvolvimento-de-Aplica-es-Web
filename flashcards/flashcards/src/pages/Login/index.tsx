import { Link } from 'react-router-dom'
import './style.css'
import { useContext } from 'react'
import { UserContext } from '../../context/user'

const Login = () => {



    return (
        <>
            <h1>Login</h1>
            <Link to="/dashboard">Ir para o Dashboard</Link>

        </>
    )
}

export default Login