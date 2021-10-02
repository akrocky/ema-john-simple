import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart}=props;
    console.log(props);
    let totalQuantity=0;
    let total = 0;
    for(const product of cart){
        product.quantity=!product.quantity?1:product.quantity
        total=total+product.price*product.quantity;
        totalQuantity=totalQuantity+ product.quantity;
    }
    // const total = cart.reduce((prev,product)=>prev+product.price,0)
    const shipping =total?15:0;
    const tax = total ?  (total+shipping)*0.1:0;
    const grandTotal= total ? total+shipping+tax:0;

    return (
        <div >
            <h3>Order Summary</h3>
                { <h5>Items Ordered:{totalQuantity}</h5>  }
                <p>Total: {total.toFixed(2)}</p>
                <p>Shipping : {shipping}</p>
                <p>tax : {tax.toFixed(2)}</p>
                <p>Grand Total: {grandTotal.toFixed(2)}</p>
                {props.children}
        </div>
    );
};

export default Cart;