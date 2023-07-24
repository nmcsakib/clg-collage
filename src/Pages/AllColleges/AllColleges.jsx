import { useContext } from "react";
import SingleCard from "../CollegeCards/SingleCard";
import { CollegeContext } from "../../Layout/Main";

const AllColleges = () => {

    const data = useContext(CollegeContext)

return (
<div>
<div className="container py-24 mx-auto">
    <div className="grid gap-4 md:grid-cols-2 -mb-10 ">
      {
        data?.map((college) => <SingleCard college={college} key={college._id} />)
      }  
    </div>
  </div>
</div>
);
};
export default AllColleges;