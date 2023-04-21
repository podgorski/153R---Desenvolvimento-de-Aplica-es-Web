import { Link } from 'react-router-dom'
import './style.css'
import { useContext } from 'react'
import { UserContext } from '../../context/user'

const Dashboard = () => {

    const { signOut } = useContext(UserContext)

    return (
        <>
            <h1>Dashboard</h1>
            <Link to="/game">JOGAR!</Link>
            <div onClick={() => signOut()}>Deslogar</div>
        </>
    )
}

export default Dashboard