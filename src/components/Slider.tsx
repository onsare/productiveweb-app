import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselProps } from "./Carousel";

const SliderComponent = ({ items }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id} className='h-56 rounded-lg w-full p-2'>
          <img
            height={500}
            src={item.imageUrl}
            alt={item.title}
            className='w-full h-56 rounded-lg '
          />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
