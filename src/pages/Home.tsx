import Banner from "../components/Banner";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

import Banner1 from "../assets/banner-bg-1.png";
import Banner2 from "../assets/banner-bg-2.png";
import Banner3 from "../assets/unsplash-banner.jpg";
import project1 from "../assets/client-1.png";
import project2 from "../assets/client-2.png";
import project3 from "../assets/client-2.png";

const carouselItems = [
  {
    id: 1,
    title: "Item 1",
    imageUrl: Banner1,
  },
  {
    id: 2,
    title: "Item 2",
    imageUrl: Banner2,
  },
  {
    id: 3,
    title: "Item 3",
    imageUrl: Banner3,
  },
];

const projects = [
  {
    id: 1,
    title: "Obli",
    poster: project1,
  },
  {
    id: 2,
    title: "Obli",
    poster: project2,
  },
  {
    id: 3,
    title: "Obli",
    poster: project3,
  },
  {
    id: 4,
    title: "Obli",
    poster: project1,
  },
  {
    id: 5,
    title: "Obli",
    poster: project1,
  },
  {
    id: 6,
    title: "Obli",
    poster: project1,
  },
  {
    id: 7,
    title: "Obli",
    poster: project1,
  },
];

const Home = () => {
  return (
    <>
      <div className='mt-6'>
        <Carousel items={carouselItems} />
      </div>
      <div className='mt-6'>
        <Banner title='Projects' data={projects} />
      </div>
      <div className='mt-6'>
        <Card />
      </div>
    </>
  );
};

export default Home;
