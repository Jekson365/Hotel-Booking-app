import { Link } from 'react-router-dom'
import './header.scss'
import { FaHotel } from 'react-icons/fa'
import { useContext } from 'react'
import { MyContect } from '../App'

const Header = () => {
    const { cart, setCart } = useContext<any>(MyContect)
    return (
        <>
            <div className="container">
                <div className="icon">
                    <h1>Hotels</h1>
                    <FaHotel className='ads' />
                </div>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/upload">Upload</Link>
                    <div className="saved"
                        onClick={() => setCart(!cart)}
                    >
                        saved
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Header