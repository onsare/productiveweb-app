import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  BannerItem,
  CarouselItem,
  DataComponentItem,
  HomeComponent,
  getHomepageData,
} from "../api/homeApi";
import {
  selectHomeScreenData,
  setHomeScreenData,
} from "../store/slices/homeScreenSlice";

import Banner from "../components/Banner";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export interface HomePageData {
  type: string;
  data: HomeComponent;
}

const Home = () => {
  const dispatch = useDispatch();

  const homepageData = useSelector(selectHomeScreenData) as HomePageData[];

  useEffect(() => {
    // Simulate Mock API call to fetch homepage data
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

  const renderComponent = (component: HomePageData) => {
    switch (component.type) {
      case "carousel":
        return <Carousel items={component.data as CarouselItem[]} />;
      case "banner":
        return (
          <Banner title='Projects' data={component.data as BannerItem[]} />
        );
      case "data":
        return <Card data={component.data[0] as DataComponentItem} />;

      default:
        return null;
    }
  };

  return (
    <>
      {homepageData?.map((component: HomePageData, index: number) => {
        return (
          <div className='mt-5' key={index}>
            {renderComponent(component)}
          </div>
        );
      })}
    </>
  );
};

export default Home;
