import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CollegeDetails = () => {
const [data, setData] = useState([])
  const {id} = useParams()
  useEffect(() => {
    fetch(`http://localhost:3000/college/${id}`).then(res => res.json()).then(data => setData(data))
  },[id])
  console.log(data);
  const {image_url, college_name, events, research_history, sports} = data;
return (
<div><section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image_url}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">COLLEGE NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{college_name}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            
            <span className="text-gray-600 ml-3">4 reveeee</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
           
            </a>
          </span>
        </div>
       <span className="divide-y-4">
       <div> <b>Events:</b> {events?.upcoming_events?.map((event, i) => <div className="py-3" key={i}>
        <p className="text-gray-600 font-semibold">{event.event_name}</p>
        <p className="text-gray-600 text-xs">{event.date}</p>
        </div>)}</div>
        <div> <b>Research:</b> {research_history?.map((research, i) => <div className="py-3" key={i}>
        <p className="text-gray-600 font-semibold">{research.title}</p>
        <p className="text-gray-600 ">{research.author}</p>
        <p className="text-gray-600 text-xs">{research.publication_date}</p>
        </div>)}</div>
        <div> <b>Sports:</b> {sports?.map((sport, i) => <div className="py-3" key={i}>
        <p className="text-gray-600 font-semibold">{sport.category}</p>
        <p className="text-gray-600 ">{sport.description}</p>
        
        </div>)}</div>
       </span>
       
       
      </div>
    </div>
  </div>
</section></div>
);
};
export default CollegeDetails;