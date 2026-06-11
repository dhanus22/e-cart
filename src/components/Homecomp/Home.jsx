import React, { useEffect, useState } from "react"
import Homecomp from "./Homecomp";
import axios from "axios";
import { Link, useOutletContext } from "react-router-dom";
import Footer from "./Footer";
import Hero from "./herocomp/Hero";
import { FaRegHeart } from "react-icons/fa";

const Home = () => {
  let [Data, setData] = useState([])
  let [isloading, isSetloading] = useState(false)
  let { search = '', setSearch, category, setCategory } = useOutletContext()

  const loadData = async () => {
    let data = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
    setData(data.data)
    isSetloading(true)
  }

  function handleCategory(category) {
    setCategory(category)
    setSearch('')
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Hero />
      {isloading ? (
        <>
          
          <ul className="flex flex-wrap justify-center items-center gap-2 md:gap-8 mt-2 font-semibold text-[9px] md:text-[14px] px-6 ">
            <li className="p-1 md:p-2 border-blue-400 border-2 rounded-[2px] text-blue-400 hover:bg-blue-500 hover:text-white cursor-pointer"
              onClick={() => handleCategory("men's clothing")}>Men's clothing</li>
            <li className="p-1 md:p-2 border-blue-400 border-2 rounded-[2px] text-blue-400 hover:bg-blue-500 hover:text-white cursor-pointer"
              onClick={() => handleCategory("jewelery")}>Jewelery</li>
            <li className="p-1 md:p-2 border-blue-400 border-2 rounded-[2px] text-blue-400 hover:bg-blue-500 hover:text-white cursor-pointer"
              onClick={() => handleCategory("electronics")}>Electronics</li>
            <li className="p-1 md:p-2 border-blue-400 border-2 rounded-[2px] text-blue-400 hover:bg-blue-500 hover:text-white cursor-pointer"
              onClick={() => handleCategory("women's clothing")}>Women's clothing</li>
            
          </ul>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-14 mt-3 mb-10">
            {Data.filter((items) =>
              items.category.toLowerCase().includes(search.toLowerCase()) &&
              items.category.toLowerCase().includes(category.toLowerCase())
            ).map((items) => (
              <Homecomp
                key={items.id}
                img={items.image}
                title={items.title}
                price={items.price}
                description={items.description}
                id={items.id}
              />
            ))}
          </div>
        </>
      ) : <span className="loader"></span>}
      <Footer />
    </>
  )
}

export default Home