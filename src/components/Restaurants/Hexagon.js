import styled from 'styled-components'
import list from '../Restaurants/Data.js'
import Cardone from '../Cards/Cardone.js';
import HexNav from './Navbars/HexNav.js';
import Cartone from '../Carts/Cartone.js';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';



const AgainEat = () => {
    const location = useLocation();
    let id = new URLSearchParams(location.search).get("id");
    if(id==="null"){
        id = 0;
    }
    else{
        id = 1;
    }
    console.log(id);
    
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);
    const handleClick = (item) => {
        // console.log(item);
        let isPresent = false;
        cart.forEach((product) => {
            if (item.id === product.id)
                isPresent = true;
        })
        if (isPresent) {
            setWarning(true);
            setTimeout(() => {
                setWarning(false)
            }, 1000);
            return;
        }
        setCart([...cart, item]);
    }
    
    return (
        <Container>
            <HexNav size={cart.length} setShow={setShow} />
            {
                show ? <section>
                    {
                        list.map((item) => (
                            <Cardone item={item} key={item.id} handleClick={handleClick} id={id} />
                        ))
                    }
                </section> : <Cartone cart={cart} setCart={setCart}  />
            }


            {
                warning && <div className='warning'>Item is already added to your cart</div>
            }
        </Container>
    );
}

export default AgainEat 
const Container = styled.div`
background: rgba(0,0,0,0.76)url('../images/fry.jpg')no-repeat center center/cover;
color:White;
background-blend-mode: darken;
width: 98.9vw;
height: 200vh;



display:flex;
text-align: center;
justify-content: center;
.ShoppingCart{
    position: absolute;
    right: 18px;
    size: 1.8rem;
    color : green;
    width: 54px;
    height: 38px;
    border-radius: 12px;
}
.cart p{
    position: absolute;
    right: 6px;
}
.details{
   display: flex;
   text-align: center;
   justify-content:center;
   padding: 12px 16px;
   margin: 8px 10px;
   gap: 40px;
}
.details button{
    border-radius: 18px;
    margin: 0px 12px;
    height: 38px;
    width: 100px;
    transition: all 0.16s ease-in-out 0.1s;
}
.details button:hover{
    border-radius: 22px;
    height: 48px;
    width: 130px;
    background-color: black;
    color: white;
}
.warning{
    position: absolute;
    right: 20px;
    margin-top: 40px;
    color: brown;
    font-size: 1.1rem;
    
}
.my_menu{
    cursor: pointer;
    font-size:2rem;
}
.cart_box{
   margin: 50px 70px;
    display: flex;
    gap: 40px;
}
.click{
  border-radius: 12px;
  text-align: center;
  margin: 0px 2px;
  padding: 1px 10px;
}
.click:hover{
  background-color: green;
  color: white;
}
.remove{
    border-radius: 16px;
}
.remove:hover{
  background-color: brown;
  color: white;
}
.total{
    font-size: 1.8rem;
    padding: 20px 10px;
}
.placeorder{
    padding: 4px 14px;
   border-radius: 16px;
   background-color: #0d6d0d;
   transition: all 0.1s ease-in-out 0.1s;
}
.placeorder:hover{
    padding: 8px 24px;
    border-radius: 16px;
   
}
`