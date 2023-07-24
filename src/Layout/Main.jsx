import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { createContext, useEffect, useState } from "react";
import AuthProvider from "../Providers/AuthProviders";

export const CollegeContext = createContext()
const Main = () => {

   const [data, setData] = useState([]);
 
 
  useEffect(() => {
    fetch('https://college-collage-server.vercel.app/colleges')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      });
  }, []);
return (
<div>
         <AuthProvider>
   <Navbar/>
      <CollegeContext.Provider value={data}>

   <div className="container min-h-screen px-10 mx-auto">
   <Outlet/>
   </div>
      </CollegeContext.Provider>
         </AuthProvider>
</div>
);
};
export default Main;