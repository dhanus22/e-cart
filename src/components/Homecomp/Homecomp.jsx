import { Link } from "react-router-dom";
import { _Auth } from "../../Backend/Bass";
import { useContext } from "react";
import { Addcart } from "../../contextapi/Cartcontext";
import { Addwishlist } from "../../contextapi/Wishcontext";
import toast from "react-hot-toast";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Homecomp = ({ img, title, price, description, id }) => {

  let { addtocart: addToCartCtx } = useContext(Addcart)
  let { addtowishlist, wishitems, remove } = useContext(Addwishlist)

  // check if this product is already wishlisted
  let iswishlisted = wishitems.some(item => item.id === id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const user = _Auth.currentUser;
      if (user && user.emailVerified) {
        addToCartCtx({ id, title, price, description, image: img })
        toast.success("Added to cart");
      } else {
        toast.error("Please login to add to cart");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const user = _Auth.currentUser;
      if (user && user.emailVerified) {
        if (iswishlisted) {
          remove(id)
          toast.success("Removed from wishlist")
        } else {
          addtowishlist({ id, title, price, description, image: img })
          toast.success("Added to wishlist")
        }
      } else {
        toast.error("Login to add to wishlist")
      }
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <Link to={`/productDetails/${id}`}>
      <div className='w-full h-[400px] flex flex-col rounded-[8px] shadow hover:border-2 border-blue-500'>

        <div className='w-full h-[180px] flex items-center justify-center mt-3 shrink-0'>
          <img src={img} alt="product" className='w-[70%] h-full object-contain'/>
        </div>

        <div className="flex flex-col flex-1 w-full px-4 pt-2 pb-3 gap-1 overflow-hidden">
          <div className="flex flex-col gap-1 flex-1">
            <h1 className='text-[14px] font-bold leading-tight'>{title.slice(0, 28)}</h1>
            <h2 className="text-[13px] text-gray-600 leading-snug">{description.slice(0, 90)}</h2>
            <h3 className="font-bold text-[14px]">${price}</h3>
          </div>

          <div className="flex gap-3 items-center">
            <button onClick={handleAddToCart}
              className="w-full py-1.5 text-[12px] font-semibold text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-all cursor-pointer rounded-[4px]">
              Add to cart
            </button>
            <button onClick={handleWishlist} className="cursor-pointer shrink-0">
              {iswishlisted
                ? <FaHeart size={28} className="text-blue-400"/>
                : <FaRegHeart size={28} className="text-blue-400"/>}
            </button>
          </div>

        </div>
      </div>
    </Link>
  )
}

export default Homecomp