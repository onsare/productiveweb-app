import { CarouselItem } from "../api/homeApi";
import Slider from "./Slider";

export interface CarouselProps {
  items: CarouselItem[];
}

const Carousel = ({ items }: CarouselProps) => {
  return <Slider items={items} />;
};

export default Carousel;
