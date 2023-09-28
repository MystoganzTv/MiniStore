import { useCart } from "../context/CartContext";


export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();
  const { name, price, image } = product;

  return (
    <div className="cartCard flex justify-between items-center border  shadow-md rounded-md  my-30 mx-10 p-10">
      <img
        className="mr-2 h-100 w-150 hidden sm:block"
        src={image}
        alt={name}
      />
      <p className="w-80 mr-2.5">{name}</p>
      <p className="w-24 mr-2.5">${price}</p>
      <button
        className="border-0 bg-myRed hover:bg-myRedHover text-white rounded px-10 py-5 pointer"
        onClick={() => removeFromCart(product)}
      >
        Remove
      </button>
    </div>
  );
};
