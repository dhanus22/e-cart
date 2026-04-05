import { createContext, useEffect, useState } from "react";

export let Addcart = createContext();

const Cartcontext = ({ children }) => {
  let [cartitems, setcartitems] = useState(()=>{
    let storedData = localStorage.getItem("cartitems")
    return storedData ? JSON.parse(storedData) : []} //!local storage data persistence
  );

  function total_price() {
    return cartitems.reduce((sum, item)=> sum + item.price * item.qty, 0)
  }
  

  let cartcount = ()=>{
        let len = cartitems.length
        console.log(len);
        if (len > 0){
            return len
        }
    }
    //console.log(cartcount());
    

  function addtocart(product) {
    setcartitems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  
  useEffect(()=> {
    localStorage.setItem("cartitems", JSON.stringify(cartitems))
  }, [cartitems])



  function increment(id) {
    setcartitems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  function decrement(id) {
    setcartitems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0)  // auto-remove when qty hits 0
    );
  }

  function remove(id) {
    setcartitems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <Addcart.Provider value={{ cartitems, setcartitems, addtocart, increment, decrement, remove, total_price, cartcount }}>
      {children}
    </Addcart.Provider>
  );
};

export default Cartcontext;