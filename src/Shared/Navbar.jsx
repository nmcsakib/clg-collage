import { useContext } from 'react';
import {FaBook, FaSearch} from 'react-icons/fa'
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
  const handelLogOut = () => {
    logOut().then(() => {
      <Navigate to="/"/>
    }).catch(err => console.log(err))
}
return (
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
    <a className="flex title-font font-medium items-center text-yellow-400 mb-4 md:mb-0">
     <FaBook className='text-3xl'/>
      <span className="ml-3 text-xl">CLG-Collage</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to='/' className="mr-5 hover:text-gray-900 text-gray-600 hover:border-b-2 border-yellow-900 font-semibold cursor-pointer">Home</Link>
      <Link to='all-college' className="mr-5 hover:text-gray-900 text-gray-600 hover:border-b-2 border-yellow-900 font-semibold cursor-pointer">Colleges</Link>
      <Link to='admission' className="mr-5 hover:text-gray-900 text-gray-600 hover:border-b-2 border-yellow-900 font-semibold cursor-pointer">Admission</Link>
      <a className="mr-5 hover:text-gray-900 text-gray-600 hover:border-b-2 border-yellow-900 font-semibold cursor-pointer">My College</a>
    </nav>
    {
      user ?  <><button onClick={handelLogOut} className="w-32 gap-2 text-white hover:to-yellow-900 transition-all font-semibold bg-gradient-to-b from-yellow-600 to-yellow-800 px-2 py-2 rounded-l-md flex justify-center items-center">Logout</button>
      <Link to="profile" className="w-32 gap-2 text-yellow-900 hover:text-black hover:border-black transition-all font-semibold border border-yellow-600 px-2 py-2 rounded-r-md flex justify-center items-center">{user?.displayName}</Link>
      </>
      :

    <Link to="login" className="w-32 gap-2 text-white hover:to-yellow-900 transition-all font-semibold bg-gradient-to-b from-yellow-600 to-yellow-800 px-2 py-2 rounded-md flex justify-center items-center">Login
    </Link>
    }
  </div>
  <div className="py-5 bg-red-400 w-full flex justify-center items-center">
    <input type="text" placeholder='Search...' className="px-5 py-2 w-2/4 border-spacing-2 rounded-tl-md rounded-bl-md" />
    <button className='w-32 gap-2 text-white hover:to-yellow-900 transition-all font-semibold bg-gradient-to-b from-yellow-600 to-yellow-800 px-2 py-2 rounded-tr-md rounded-br-md flex justify-center items-center'><FaSearch/> Search </button>
  </div>
</header>
);
};
export default Navbar;