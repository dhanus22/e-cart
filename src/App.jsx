// import './App.css'
// import Layout from './myproject/Layout'


// // let btn = () =>{
// //   alert("Button clicked")
// // }


// let App =()=>{
//   return (
//     // <div className='bg-amber-300 p-5 m-5 rounded-2xl h-96 w-96 text-center'>
//     //   {/* <h1 className='text-3xl font-bold text-brown-500 p-5 bg-red-600 m-3 rounded-2xl text-center'>Iam from App.jsx</h1> */}
//     //   <button className='bg-amber-950 text-white font-bold m-2 p-2 w-20 rounded-4xl' onClick={btn}>Click</button>
//     // </div>
//     <Layout/>
//   ) 
// }

// export default App

import { FaStar } from "react-icons/fa";

const App = () => {
  const count = 4;
  const totalStars = 5;

  return (
    <div className="flex gap-2">
      {[...Array(totalStars)].map((_, i) => (
        <FaStar
          key={i}
          size={40}
          className={
            i < count
              ? "text-yellow-400"
              : "text-transparent [stroke:#FACC15] [stroke-width:28]"
          }
        />
      ))}
    </div>
  );
};

export default App;