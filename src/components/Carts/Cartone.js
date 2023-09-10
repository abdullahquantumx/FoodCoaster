import { useEffect, useState } from 'react'

import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
// import * as firebase from 'firebase/app';

import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBTdUS2krzmWEHO_lok6Ej48MVD3v-nKa4",
  authDomain: "foodcoaster-770a4.firebaseapp.com",
  projectId: "foodcoaster-770a4",
  storageBucket: "foodcoaster-770a4.appspot.com",
  messagingSenderId: "370519028100",
  appId: "1:370519028100:web:17c8697c67597a85102dd1"
};
// import styled from 'styled-components'
const Cartone = ({ cart, setCart }) => {
    const [price, setPrice] = useState(0)
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !==id);
        setCart(arr);
        // handlePrice();
    }
    useEffect(() => {
        handlePrice();
    })
    const handleChange = (item, d) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if (data.id === item.id)
                ind = index;
        });
        if (ind === -1) {
            return; // Item not found in cart
        }
    
        const updatedCart = cart.map((data, index) => {
            if (index === ind) {
                const updatedAmount = data.amount + d;
                return {
                    ...data,
                    amount: updatedAmount < 1 ? 1 : updatedAmount
                };
            }
            return data;
        });
    
        setCart(updatedCart);
    }
    const placeOrder = () => {
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        const ordersRef = ref(database, 'orders');
      
        const orderData = {}; // Create an empty object to store cart items
      
        // Iterate over each item in the cart and add it to the orderData object
        cart.forEach((item) => {
          orderData[item.id] = {
            title: item.title,
            price: item.price,
            amount: item.amount,
          };
        });
      
        // Push the orderData object to the 'orders' node
        push(ordersRef, orderData)
          .then(() => {
            console.log('Data added to Firebase Realtime Database successfully.');
          })
          .catch((error) => {
            console.error('Error adding data to Firebase Realtime Database:', error);
          });
        };
    const showAlert= () => {
        alert('Your Order is Conformed');
    }
    const place=()=>{
        placeOrder();
        showAlert();
    };
      
      
    return (
        <article>
            {
                cart?.map((item) => (
                    <div className='cart_box' key={item.id}>
                        <div className='cart_title'>
                            <p>➺{item.title}</p>

                        </div>
                        <div>
                            <button className='click' onClick={()=>handleChange(item,+1)}>+</button>
                            <button className='click'>{item.amount}</button>
                            <button className='click' onClick={()=>handleChange(item,-1)}>-</button>
                        </div>
                        <div>
                            <span>₹{item.price}/-</span>
                            <button className='remove' onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span> =₹{price}/-</span>
            </div>
            <div>
              <button className='placeorder'  onClick={place}>
                <h5>Place order</h5></button>
            </div>
        </article>
    );
};

export default Cartone;



