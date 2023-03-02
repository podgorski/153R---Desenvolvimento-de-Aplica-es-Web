import foto from '../../assets/foto.jpg'
import './style.css'
function Card() {
    return (
        <div className='card'>
            <div className='title'>Amanda Schurtz</div>

            <div className='content'>
                <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
                <div className='image'>
                    <img src={foto} className='avatar' />
                </div>
            </div>
        </div>
    )
}

export default Card