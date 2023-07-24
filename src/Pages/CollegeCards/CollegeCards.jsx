import { useContext } from "react";

import SingleCard from "./SingleCard";
import { CollegeContext } from "../../Layout/Main";
const CollegeCards = () => {

  const data = useContext(CollegeContext)
  const colleges = data.slice(0,3);
  console.log(data);
return (
<section className="text-gray-600 body-font">

  <div className="container py-24 mx-auto">
    <div className="grid gap-4 md:grid-cols-2 -mb-10 ">
      {
        colleges?.map((college) => <SingleCard college={college} key={college._id} />)
      }  
    </div>
  </div>
</section>
);
};
export default CollegeCards;