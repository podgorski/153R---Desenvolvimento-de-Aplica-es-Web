import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/user'

const Login = () => {

    const { user, signIn, loading } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate("/dashboard")
    }, [user])

    if (loading) {
        return <p>carregando ...</p>
    }

    return (
        <>
            <h1 onClick={() => signIn("antonio@podgorski.com.br", "123123")}>Login Papai</h1>
            <h1 onClick={() => signIn("liz@podgorski.com.br", "123123")}>Login Liz</h1>
            <Link to="/dashboard">Ir para o Dashboard</Link>

        </>
    )
}

export default Login