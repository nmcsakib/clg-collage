import { useContext } from "react";
import { Link } from "react-router-dom";
import { CollegeContext } from "../../Layout/Main";

const Addmission = () => {

    const colleges = useContext(CollegeContext)
    
    return (

<div className="bg-gray-200 flex flex-col gap-4 py-5 w-full items-center justify-center">
  {
    colleges?.map(college => <Link to={`/admission-details/${college._id}`} key={college._id} className="rounded-sm w-5/6 grid grid-cols-12 mx-auto bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">

  
    
    <div className="col-span-11 md:col-start-2 xl:-ml-5">
      <p className="text-lg text-blue-600 font-semibold"> {college.college_name}</p>
    </div>
    
    
    <div className="md:col-start-2 col-span-11 xl:-ml-5">
      <p className=" text-gray-800 "> Admission Deadline: {college.admission_dates.application_deadline} </p>
    </div>
    
  
    </Link>)
  }
  
  
</div>
);
};
export default Addmission;