import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselProps } from "./Carousel";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SliderComponent = ({ items }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id} className='md:h-[20rem] rounded-lg w-full '>
          <img
            src={item.imageUrl}
            alt={item.title}
            className='w-full  rounded-lg object-cover '
          />
          <Link to='/another-page'>
            <button className='bg-purple-500 p-2 md:p-4 rounded-lg  md:min-w-[200px] font-bold text-white absolute bottom-[50px] m-6 flex justify-between'>
              See {item.title} <ArrowRight />
            </button>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
