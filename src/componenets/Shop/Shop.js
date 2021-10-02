import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]= useState([]);
    const [cart,setCart]=useState([]);
    const[displayProducts,setDisplayProducts]=useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{setProducts(data);
            setDisplayProducts(data)
        })
    },[]);
    useEffect(()=>{
        if(products.length){
      const savedCart = getStoredCart();
      const storeCart=[];
      for(const key in savedCart){
        
          
          const addedProduct=products.find(product=>product.key===key);
          if(addedProduct){
              const quantity=savedCart[key];
              addedProduct.quantity=quantity;
            storeCart.push(addedProduct);
          }
            

          }
          setCart(storeCart)
      }

    },[products])
    const handleAddToCart=(product)=>{
        const exists = cart.find(pd=>pd.key=== product.key)
        let newCart=[]
        if(exists){
         const rest =cart.filter(pd=>pd.key!== product.key)
         exists.quantity=exists.quantity+1;
         newCart=[...rest,product]
        }
        else{
            product.quantity=1;
            newCart =[...cart,product]
        }
        
        console.log(newCart);
        setCart(newCart)
        // save to local storage
        addToDb(product.key)
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));

    
        setDisplayProducts(matchedProducts);
    }
    return (
        <>
        <div className="search-container">
            <input type="text" 
            onChange={handleSearch}
            placeholder="Search your product"/>
        </div>,
        <div>
          <div className="shop-container">
            <div className="product-container">

{
    displayProducts.map(product=><Product key={product.key} product={product} handleAddToCart={handleAddToCart}></Product>)
}
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                   
                   <Link to="/review">
                   <button className = "btn-regular"> review your order </button>
                  </Link>
               </Cart>
                </div>  
          </div>
        </div>
        </>
    )
};

export default Shop;