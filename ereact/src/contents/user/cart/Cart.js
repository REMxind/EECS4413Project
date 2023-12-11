import React, {useState} from "react";
import {Card} from "react-bootstrap";
import './Cart.css'
import CartItemList from "../../../component/cartItemList/CartItemList";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const [listSize, setListSize] = useState(0);

    const handleCheckout = (event) => {
        event.preventDefault();
        navigate('/checkout'); // go to checkout page
    }

    const handleListSize = (listItem) => {
        console.log(listItem);
        setListSize(listItem.length);
    }

    return (
        <div className="card-container">
            <Card id="cart-card">
                <Card.Title id="cart-card-title" className="card-title">Shopping Cart</Card.Title>
                <CartItemList onItemList={handleListSize}/>
                <div className="button-container">
                    {listSize === 0 && <Button id="cart-button" onClick={() => navigate('/')}>Back to Home</Button>}
                    {listSize > 0 && <Button id="cart-button" onClick={handleCheckout}>Proceed to Checkout</Button>}
                </div>
            </Card>
        </div>
    );
};

export default Cart;