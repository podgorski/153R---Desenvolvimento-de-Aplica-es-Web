import { Link } from 'react-router-dom'
import './style.css'

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <Link to="/game">JOGAR!</Link>
        </>
    )
}

export default Dashboard