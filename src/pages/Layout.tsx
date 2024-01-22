import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className='flex bg-white shadow-lg p-4'>
        <div className='flex items-center'>
          {/* <img
            src='path/to/your/logo.png'
            alt='Logo'
            className='w-8 h-8 mr-2'
          /> */}
          <span className='text-lg font-semibold'>Productive</span>
        </div>

        <div className='flex items-center ml-auto'>
          <Link to='/' className='text-blue-500 hover:underline mr-4'>
            Home
          </Link>
          <Link to='/profile' className='text-blue-500 hover:underline'>
            Profile
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
