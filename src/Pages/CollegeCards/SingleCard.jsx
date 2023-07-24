import { useState } from "react";
import { FaArrowUp, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleCard = ({college}) => {
const {_id, college_name, admission_dates} = college ;
    const [showModal, setShowModal] = useState(false);
  console.log(college);
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
return (
<>
 
      {showModal && (
        <div className="fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto">
          <div className="relative sm:w-3/4 md:w-1/2 lg:w-1/3 mx-2 sm:mx-auto my-10 opacity-100">
            <div
              className="relative bg-white shadow-lg rounded-md text-gray-900 z-20"
              onClick={closeModal}
              role="dialog"
              aria-modal="true"
            >
              <header className="flex items-center justify-between p-2">
                <h2 className="font-semibold">Header</h2>
                <button className="focus:outline-none p-2" onClick={closeModal}>
                 <FaTimes/>
                </button>
              </header>
              <main className="p-2 text-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem, optio dolorem accusantium fuga
                  molestias nobis sequi autem ducimus laudantium beatae amet earum, quia reiciendis corporis animi modi
                  pariatur impedit!
                </p>
              </main>
            </div>
          </div>
        </div>
      )}
    
<div className="flex p-3 rounded-md gap-5 bg-gray-400 mb-10">
        <div className="rounded-lg h-24 w-24 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501"/>
        </div>
        <div className="space-y-3">
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{college_name}</h2>
        <p className="leading-relaxed text-base"><b>Admission data:</b> {admission_dates?.application_deadline}</p>
        <p onClick={openModal} className="leading-relaxed underline group inline-block cursor-pointer text-base"><b>Our events <FaArrowUp className="inline group-hover:-mt-3"/></b></p> <br />
        <p onClick={openModal} className="leading-relaxed underline group inline-block cursor-pointer text-base"><b>Sports <FaArrowUp className="inline group-hover:-mt-3"/></b></p> <br />
        <p onClick={openModal} className="leading-relaxed underline group inline-block cursor-pointer text-base"><b>Our researches <FaArrowUp className="inline group-hover:-mt-3"/></b></p>
        <Link to={`/college/${_id}`} state={_id} className="flex ml-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Details</Link>
        </div>
      </div>
</>
);
};
export default SingleCard;