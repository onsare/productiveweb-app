import Banner from "../components/Banner";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Card />
      </div>
    </>
  );
};

export default Home;
