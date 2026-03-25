import React, { useEffect, useState } from "react"
import Homecomp from "./Homecomp";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import Footer from "./Footer";
import Hero from "./herocomp/Hero";


const Home = () => {

  let [Data, setData] = useState([])
  let [isloading, isSetloading] = useState(false)

  let {search = '', setSearch, category, setCategory} = useOutletContext()


  const loadData = async () => {
    // let data = await fetch('https://fakestoreapi.com/products')
    // let res = await data.json() 

    let data = await axios.get('http://localhost:3006/products') 
    setData(data.data)
    isSetloading(true)
    //console.log(data.data);
  }
  
   function handleCategory(category){
    setCategory(category)
    setSearch('')
   }
   

  useEffect(() => {
    loadData()
  }, [])
        
   
  // console.log(search);
  

  return (
    <>
     <Hero/>
       {isloading ? (
        <>
        
    <ul className="flex justify-center items-center gap-8 mt-6 font-semibold text-[16px]">
          <li className="p-2 border-blue-400 border-2 rounded-[18px] text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer" onClick={() => handleCategory("men's clothing")}>Men's clothing</li>
          <li className="p-2 border-blue-400 border-2 rounded-[18px] text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer" onClick={() => handleCategory("jewelery")}>Jewelery</li>
          <li className="p-2 border-blue-400 border-2 rounded-[18px] text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer" onClick={() => handleCategory("electronics")}>Electronics</li>
          <li className="p-2 border-blue-400 border-2 rounded-[18px] text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer" onClick={() => handleCategory("women's clothing")}>Women's clothing</li>
        </ul>
        
        <div className="flex flex-wrap justify-center gap-x-14 gap-y-7 mt-6 h-full mb-10">
        {/* {Data.map((items) => (
          <div key={items.id}>
            <Homecomp img={items.image} title={items.title} price={items.price} description={items.description} id={items.id}/>
          </div>
        ))} */}
        {Data.filter((items)=>items.category.toLowerCase().includes(search.toLowerCase()) && items.category.toLowerCase().includes(category.toLowerCase())
       ).map((items)=>(
          <div key={items.id}>
            <Homecomp img={items.image} title={items.title} price={items.price} description={items.description} id={items.id}/>
          </div>
        
        ))}
      </div>
      
      </>
      ) : <span class="loader"></span> }
      <Footer/>
    </>

  )
}

export default Home