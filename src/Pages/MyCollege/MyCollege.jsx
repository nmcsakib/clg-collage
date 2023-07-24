
import { useForm } from "react-hook-form";

const MyCollege = () => {


    const {
        register,
        handleSubmit,
    
      } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }

return (
<div>
<section className="text-gray-600 body-font">
  <div className="container flex flex-wrap px-5 py-24 mx-auto items-center" >
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200" >
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
      <p className="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
      <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
    <form className=" bg-white flex flex-col md:ml-auto w-full " onSubmit={handleSubmit(onSubmit)}>
        
        <h2 className="text-gray-700 border-b-4 pb-3 border-gray-800 text-3xl mb-1 font-semibold title-font">Give Review</h2>
      
        <div className="relative my-4">
          <label htmlFor="name" className="leading-7 text-gray-600">Your name:</label>
          <input required {...register("name")} type="text" value={''} name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-gray-600">Your post:</label>
          <input required {...register("job")} defaultValue={''} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="subject" className="leading-7 text-gray-600">Review Details:</label>
          <textarea cols={8} rows={20} required {...register("review")} type="text" id="subject" name="subject" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      
        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </form>
  </div>
</section>
</div>
);
};
export default MyCollege;