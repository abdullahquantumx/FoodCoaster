import React from 'react'
import styled from 'styled-components'
import {FaShoppingCart } from 'react-icons/fa'

const HexNav = ({size,setShow}) => {
  return (
    <>
    <div className='nav_box'>
        <span className='my_menu' onClick={()=>setShow(true)}>Menu</span>
    </div>
     <div className='cart'>
                <span>
                    <button className='ShoppingCart' onClick={()=>setShow(false)}><FaShoppingCart/></button>
                </span>
                <p className='ShoppingCart'>{size}</p>
            </div>
    </>
  )
}

export default HexNav
const Container = styled.div`

`