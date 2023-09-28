import { useEffect, useState } from "react";

import { useCart } from "../context/CartContext";
import { cartReducer } from "../reducer/CartReducer";

export const ProductCard = ({ product }) => {
  // const { addToCart } = useCart();
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  const { id, name, price, image } = product;

  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <div className=" productCard w-350 bg-white shadow-md border rounded-md p-2.5 m-2.5 flex flex-col justify-between">
      <img className="max-w-full h-250 my-2.5 mx-0" src={image} alt={name} />
      <p className="text-lg font-medium my-2.5 mx-0">{name}</p>
      <div className="action flex justify-between items-center my-2.5 mx-0">
        <p>${price}</p>
        {isInCart ? (
          <button
            className="border-0 bg-myRed hover:bg-myRedHover text-white rounded px-10 py-5 pointer"
            onClick={() => removeFromCart(product)}
          >
            Remove
          </button>
        ) : (
          <button
            className="bg-btnBlueLight hover:bg-btnBlueDark text-white text-base py-7 px-2.5 border rounded-5 max-w-150"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
