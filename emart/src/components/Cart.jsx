import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../redux/action";
import Product from "./Product";

const Cart = () => {
    const state = useSelector((state)=> state.addCart)
    const dispatch = useDispatch()

    const cartItems = (Product) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={Product.id}>
                <div className="container py-4">
                    <button className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={Product.image} alt={Product.title}></img>
                        </div>
                        <div className="col-md-4">

                       
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 

    return  (
        <>
            {state.lengh !==0 && state.map(cartItems)}
        </>
    );
}

export default Cart;