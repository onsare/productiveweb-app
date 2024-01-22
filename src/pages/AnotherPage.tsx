import { Link } from "react-router-dom";

const AnotherPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[80vh]'>
      <h1 className='mb-6'>This is another example page</h1>

      <div className='mb-6 '>
        <Link to='/'>
          <button className='w-full min-w-48 bg-purple-500 font-bold text-white p-2 rounded-[50px] hover:bg-purple-600 focus:outline-none'>
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AnotherPage;
