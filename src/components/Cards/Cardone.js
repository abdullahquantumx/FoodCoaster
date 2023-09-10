import React from "react";
import styled from "styled-components";

 
const Cardone = ({ item, handleClick, id }) => {
  const { title, price } = item;
  console.log(id);
  return (
    <>
      <div className="details">
        <p>➺{title}</p>
        <p>₹{price}/-</p>{" "}
        {id && <button onClick={() => handleClick(item)}>Add to Cart</button>}
      </div>
    </>
  );
};

export default Cardone;
const Container = styled.div``;
