import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdmissionDetails = () => {

    const {user} = useContext(AuthContext)
    const [college, setData] = useState([])
  const {id} = useParams()
  useEffect(() => {
    fetch(`https://college-collage-server.vercel.app/college/${id}`).then(res => res.json()).then(data => setData(data))
  },[id])

  const {
    register,
    handleSubmit,
    reset
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    fetch('https://college-collage-server.vercel.app/candidate-details/', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({...data, college: college.college_name})
      }).then(res => res.json()).then(data => {
      console.log(data);
      reset() 
    }) 
    }

return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col" >
    <div className="lg:w-4/6 mx-auto" >
      
      <div className="flex flex-col sm:flex-row mt-5" >
      <form className=" bg-white flex flex-col md:ml-auto w-full " onSubmit={handleSubmit(onSubmit)}>
        
      <h2 className="text-gray-700 border-b-4 pb-3 border-gray-800 text-3xl mb-1 font-semibold title-font">Get admit to {college?.college_name} !</h2>
    
      <div className="relative my-4">
        <label htmlFor="name" className="leading-7 text-gray-600">Candidate name:</label>
        <input required {...register("candidate")} type="text" value={user?.displayName} name="candidate" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-gray-600">Candidate Email</label>
        <input required {...register("email")} defaultValue={user?.email} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="subject" className="leading-7 text-gray-600">Subject:</label>
        <input required {...register("subject")} type="text" id="subject" name="subject" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="phoneNumber" className="leading-7 text-gray-600">Phone Number:</label>
        <input required {...register("phoneNumber")} type="tel" id="phoneNumber" name="phoneNumber" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="date of birth" className="leading-7 text-gray-600">Date of birth</label>
        <input required {...register("dateOfBirth")} type="text" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="address" className="leading-7 text-gray-600">Address</label>
        <input required {...register("address")} type="text" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="picture" className="leading-7 text-gray-600">Candidate Picture</label>
        <input required {...register("picture")} type="url" id="picture" name="picture" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      
      <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      </form>
    </div>
  </div>
      </div>
   
  
</section>
);
};
export default AdmissionDetails;