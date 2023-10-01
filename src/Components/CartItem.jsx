import React from "react";
import delIcon from "../assets/delIcon.png";
function CartItem({ item, onDelete }) {
  return (
    <div className="flex p-2 space-x-5 mt-2 shadow-xl bg-white rounded-xl">
      <img className="w-32 h-32 rounded-lg" src={item.image} alt={item.name} />
      <div className="mt-5">
        <h3 className="font-poppins font-bold text-lg">{item.name}</h3>
        <p className="font-poppins text-lg"> Price: ${item.price}</p>
        <p className="font-poppins text-lg">Amount: {item.amount}</p>
      </div>
      <button onClick={() => onDelete(item.id)}>
          <img className="w-10 ml-5" src={delIcon} alt="DelImg" />
      </button>
    </div>
  );
}

export default CartItem;
