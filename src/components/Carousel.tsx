import Slider from "./Slider";

interface CarouselItem {
  id: number;
  title: string;
  imageUrl: string;
}
export interface CarouselProps {
  items: CarouselItem[];
}

const Carousel = ({ items }: CarouselProps) => {
  return <Slider items={items} />;
};

export default Carousel;
