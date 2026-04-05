import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
//import App from './App.jsx'
import { Mymap } from './Map/Map.jsx'
// import { Authcontext } from './contextapi/Contextapi.jsx'
import Contextapi from './contextapi/Contextapi.jsx'
import Cartcontext from './contextapi/Cartcontext.jsx'
import Wishcontext from './contextapi/Wishcontext.jsx'



createRoot(document.getElementById('root')).render(
   <Cartcontext>
   <Wishcontext>
      <Contextapi>
      <RouterProvider router={Mymap} />
   </Contextapi>
   </Wishcontext>
   </Cartcontext>
)
