import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DataComponentItem } from "../api/homeApi";

const Card = ({ data }: { data: DataComponentItem }) => {
  return (
    <div className='bg-white rounded-lg p-6'>
      <div className='flex gap-2 items-center'>
        <img
          src={data.avatar}
          alt='Profile'
          className='w-24 h-24 rounded-full border-4 border-purple-500'
        />
        <h1 className='font-bold'>{data.username}</h1>
      </div>
      <div className='mt-6'>
        <h2 className='text-purple-500 font-bold text-[25px]'>Our Story</h2>
        <img
          src={data.image}
          alt=''
          className='w-full h-[300px] object-fill rounded-lg'
        />
        <p className='mt-6 text-gray-500'>{data.excerpt}</p>
      </div>
      <Link to='/another-page'>
        <button className='bg-purple-500 p-4 rounded-lg min-w-[200px] font-bold text-white  mt-6 flex justify-between'>
          <span>View More</span>
          <ArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Card;
