"use client";

import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";
import { useRef } from "react";

type DataItem = {
  id: number;
  poster: string;
  title: string;
};

const Banner = ({
  title,
  data,
  slideWidth = 500,
}: {
  title: string;
  data: DataItem[];
  slideWidth?: number;
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= slideWidth;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += slideWidth;
    }
  };
  return (
    <div className='max-w-[1200px] mx-auto space-y-2'>
      <div className='flex justify-between'>
        <h4>{title}</h4>
        <div className='flex gap-4'>
          <button title='scroll left' onClick={slideLeft}>
            <ArrowLeftSquare />
          </button>
          <button title='scroll right' onClick={slideRight}>
            <ArrowRightSquare />
          </button>
        </div>
      </div>

      <div
        className='flex gap-3 relative overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth hide-scrollbar'
        ref={sliderRef}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className={`w-${slideWidth} rounded-lg bg-slate-500 `}
          >
            <img
              width={500}
              height={500}
              src={item.poster}
              alt={item.title}
              className=' w-48 h-[200px] rounded-lg object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
