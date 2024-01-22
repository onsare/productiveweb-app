import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HomepageData, getHomepageData } from "../api/homeApi";
import {
  selectHomeScreenData,
  setHomeScreenData,
} from "../store/slices/homeScreenSlice";

import Banner from "../components/Banner";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Home = () => {
  const dispatch = useDispatch();

  const homepageData = useSelector(selectHomeScreenData) as HomepageData[];

  useEffect(() => {
    //Simulatet Mock API call to fetch homepage data
    const fetchData = async () => {
      getHomepageData()
        .then((data) => {
          dispatch(setHomeScreenData(data.components));
        })
        .catch((err) => {
          console.log("something went wrong", err);
        });
    };

    fetchData();
  }, [dispatch]);

  const renderComponent = (item) => {
    switch (item.type) {
      case "carousel":
        return <Carousel items={item.data} />;
      case "banner":
        return <Banner title='Projects' data={item.data} />;
      case "data":
        return <Card data={item.data[0]} />;

      default:
        return null;
    }
  };

  return (
    <>
      <div>
        {homepageData?.map((component: HomepageData, index: number) => (
          <div className='mt-5' key={index}>
            {renderComponent(component)}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
