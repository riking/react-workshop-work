// import './CartPage.css'

import { useContext } from "react";
import CartContext from "./CartContext";

const CartPage = () => {
    const cart = useContext(CartContext);
    return (
        <div className='CartPage'>
            <h1>Shopping Cart</h1>
        </div>
    )
};

export default CartPage;
