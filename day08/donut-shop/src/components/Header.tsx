import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './CartContext';
import './Header.css'

const Header = () => {
    const cart = useContext(CartContext);
    const cartLen = cart.entries.length;
    const cartText = cartLen === 0 ? "Cart" : `Cart (${cartLen})`;
    return (
        <header className='Header'>
            <Link to="/" >Home</Link>
            <Link to="/cart" >{cartText}</Link>
            <Link to="/bogus" >404</Link>
        </header>
    )
};

export default Header;
