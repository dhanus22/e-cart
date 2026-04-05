import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export let Addwishlist = createContext()

let Wishcontext = ({children})=>{
    let [wishitems, setWishitems] = useState(()=>{
        let data = sessionStorage.getItem("wishitems")
        return data ? JSON.parse(data):[]
    })

    useEffect(()=>{
        sessionStorage.setItem("wishitems", JSON.stringify(wishitems))
    },[wishitems])

    // function addtowishlist(product){
    //     setWishitems(prev=>{
    //         let exists = prev.find(item=>item.id === product.id)
    //         if(exists){
    //             toast.error("Already in your wishlist")
    //             return prev
    //         }
    //         return [...prev, product]
    //     }
    //         )
    //     console.log(wishitems);
    // }

    function addtowishlist(product){
        setWishitems(prev=>[...prev, product] )
        toast.success("Added to wish list")
        console.log(wishitems);
    }

    function remove(id){
        setWishitems(prev=>prev.filter(item=>item.id !== id))
    }

    return (<Addwishlist.Provider value={{wishitems,setWishitems, addtowishlist, remove}}>
        {children}
        </Addwishlist.Provider>)


}

export default Wishcontext