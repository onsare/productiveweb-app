import { useDispatch, useSelector } from "react-redux";
import React, { Suspense, useEffect } from "react";
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

const LazyBanner = React.lazy(() => import("../components/Banner"));
const LazyCard = React.lazy(() => import("../components/Card"));
const LazyCarousel = React.lazy(() => import("../components/Carousel"));

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
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCarousel items={component.data as CarouselItem[]} />
          </Suspense>
        );
      case "banner":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyBanner
              title='Projects'
              data={component.data as BannerItem[]}
            />
          </Suspense>
        );
      case "data":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <div className='flex w-full gap-4'>
              <div className='w-1/2'>
                <LazyCard data={component.data[0] as DataComponentItem} />
              </div>
              <div className='w-1/2'>
                <LazyCard data={component.data[0] as DataComponentItem} />
              </div>
            </div>
          </Suspense>
        );

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
