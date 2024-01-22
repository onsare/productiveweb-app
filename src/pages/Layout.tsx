import { Link, Outlet } from "react-router-dom";

import Logo from "../assets/logo.png";

const Layout = () => {
  return (
    <>
      <nav className='flex bg-white shadow-lg p-4'>
        <div className='flex items-center'>
          <Link to='/'>
            <img src={Logo} alt='Logo' className='w-48' />
          </Link>
        </div>

        <div className='flex items-center ml-auto'>
          <Link
            to='/'
            className='text-purple-500 font-bold hover:underline mr-4'
          >
            Home
          </Link>
          <Link
            to='/profile'
            className='text-purple-500 font-bold hover:underline'
          >
            Profile
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
