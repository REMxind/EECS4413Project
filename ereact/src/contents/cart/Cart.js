import React from "react";
import './Cart.css';
import {useState, useEffect} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import CartItem from "../../component/cart_item/CartItem";

const Cart = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [prev, setPrev] = useState('');
    const [next, setNext] = useState('');
    const [itemList, setItemList] = useState(null);

    const renderCart = () => {
        axios.get(`api/shopping-cart/cart/products?page=${currentPage}`).then(res => {
            const data = res.data
            setPrev(data['previous']);
            setNext(data['next']);
            setItemList(data['results']);
        }).catch(error => {
            console.log(error);
        })
    };

    useEffect(() => {
        renderCart();
    }, [currentPage]);

    const handlePrevPage = (event) => { // temp pagination function
        console.log(prev);
        if (prev) {
            setCurrentPage(currentPage - 1);
            renderCart();
        }
    }

    const handleNextPage = (event) => { // temp pagination function
        console.log(next);
        if (next) {
            setCurrentPage(currentPage + 1);
            renderCart();
        }
    }

    return (
        // implement cart page
        <div>
            <div>
                {itemList && itemList.map(item => (<CartItem data={item} key={item.id} />))}
            </div>
            <Button onClick={ handlePrevPage }>Prev</Button>
            <span>{currentPage}</span>
            <Button onClick={ handleNextPage }>Next</Button>
        </div>
    )
};

export default Cart;