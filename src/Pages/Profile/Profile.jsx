import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col" >
    <div className="lg:w-4/6 mx-auto" >
      
      <div className="flex flex-col sm:flex-row mt-10" >
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8" >
          <div className="w-20 h-full rounded-full flex flex-col items-center justify-center gap-1" >
           <img src={user.photoURL} className="w-full rounded-full border border-yellow-600" alt="" />
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{user.displayName}</h2>
          </div>
          
          
        </div>
        <div className="md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">See Your Details</h2>
    
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" disabled value={user.displayName} id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" disabled value={user.email} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="university" className="leading-7 text-sm text-gray-600">University</label>
        <input type="text" disabled id="university" name="university" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
        <input type="text" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Edit</button>
      
    </div>
  </div>
      </div>
    </div>
  
</section>
);
};
export default Profile;