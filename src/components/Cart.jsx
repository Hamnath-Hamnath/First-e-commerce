import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {addCart, deleteCart} from "../redux/action/index";

function Cart() {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleClose = item => {
        dispatch(deleteCart(item))
    }

    
    const emptyCart = () =>{
        return(
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className='container py-5'>
                    <div className='row'>
                        <h3 className='text-center fw-bold'>OOPS!! Your cart is emtpy </h3>
                    </div>
                </div>
            </div>
        )
    }
    const CartItems = cartItems =>{
        return(
            <div className='px-4 my-5 bg-light rounded-3' key={cartItems.id}>
                <div className='container py-4'>
                    {/* <button className='btn-close float-end' aria-label='Close' onClick={() => handleClose(cartItems)}></button> */}
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItems.image} alt={cartItems.title} height="200px" width="180px" />
                        </div>
                        <div className='col-md-4'>
                            <h3>{cartItems.title}</h3>
                                <p className='lead fw-bold'> 
                                    {cartItems.qty} X ${cartItems.price} = ${cartItems.qty * cartItems.price}
                                </p>
                            <button className='btn btn-outline-dark me-4 ' onClick={()=>dispatch(deleteCart(cartItems))} >
                                <i className='fa fa-minus'></i>
                            </button>
                            <button className='btn btn-outline-dark' onClick={()=>dispatch(addCart(cartItems))}>
                                <i className='fa fa-plus'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    const button = () =>{
        return(
            <div className='container'>
                <div className='row'>
                    <NavLink to="/" className="btn btn-outline-dark mb-5 w-25">Proceed to checkout</NavLink>
                </div>
            </div>
        )
    }
  return (
    <div>
        {
            state.length === 0 && emptyCart()
        }
        {
            state.length !== 0 && state.map(CartItems)
        }
        {/* {
            state.length !== 0 && button()
        } */}
    </div>
  )
}

export default Cart