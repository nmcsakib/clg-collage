
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">{error.status}</h1>
	
        <p>{error?.data}</p>

<div className='w-64 '>
  <img src="https://www.foodnetwork.com/content/dam/images/food/fullset/2008/12/23/0/FNmag_Movie-Theater-Style_s4x3.jpg" alt="" />
  <p className='w-full text-center'>May be you are lost. Well, at least you got a popcorn!</p>
</div>

	<button className="mt-5">
      <a
        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
        >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          <Link to="/">Go Home</Link>
        </span>
      </a>
    </button>
</main>
        </div>
    );
};

export default ErrorPage;