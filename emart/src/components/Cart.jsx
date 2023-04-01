import React from "react";
import { useDispatch, useSelector } from "react-redux";
import handleCart from "../redux/reducer/handleCart";

const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()


const cartItems = (handleCart) => {
return(
<div className="px-4 my-5 bg-light rounded-3">
    <div className="container py-4">
<div className="row">
    <div className="col-md-4">
        <img src={Product.image} alt={product.title} height="200px" width="180px" />
    </div>
    <div className="col-md-4">
        <h3>{product.title}</h3>
        <p className="lead fw-bold">
            {product.qty} X ${product.price} = $
            {product.qty * product.price}
        </p>
        <button className="btn btn-outline-dark me-4"
        onClick={()=>handleButton(product)}>
            <i className="fa fa-minus"></i>
        </button>
        <button className="btn btn-outline-dark"
        onClick={()=> handleButton(product)}>
            <i className="fa fa-plus"></i>
        </button>
    </div>
</div>
</div>
</div>
);
}
}

export default Cart;