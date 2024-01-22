import Banner1 from "../assets/banner-bg-1.png";
import project1 from "../assets/client-1.png";
import project2 from "../assets/client-2.png";
import project3 from "../assets/client-2.png";

export const getHomepageData = (): Promise<HomepageData> => {
  return new Promise((resolve) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      const data: HomepageData = {
        components: [
          {
            type: "carousel",
            data: generateCarouselData(),
          },
          {
            type: "banner",
            data: generateBannerData(),
          },
          {
            type: "data",
            data: generateDataComponent(),
          },
        ],
      };

      resolve(data);
    }, 1000);
  });
};

const generateCarouselData = (): CarouselItem[] => {
  return [
    {
      id: 1,
      title: "Eco99fm",
      imageUrl:
        "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
      description:
        "We built an innovative design and a modern user experience. Something reminiscent of an overseas software product experience.",
    },
    {
      id: 2,
      title: "Digital Studio",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "We built an innovative design and a modern user experience. Something reminiscent of an overseas software product experience.",
    },
    {
      id: 3,
      title: "Get In",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Get It is not a leading application in the field of events. The company hired us to enter the American and international market, and produce a system that can support a large number of users.",
    },
  ];
};

const generateBannerData = (): BannerItem[] => {
  return [
    {
      id: 1,
      title: "View Offers",
      poster: project1,
      action: "highlightAction",
      buttonText: "",
    },
    {
      id: 2,
      title: "View Offers",
      poster: project2,
      action: "highlightAction",
      buttonText: "",
    },
    {
      id: 3,
      title: "View Offers",
      poster: project3,
      action: "highlightAction",
      buttonText: "",
    },
    {
      id: 4,
      title: "View Offers",
      poster: project1,
      action: "highlightAction",
      buttonText: "",
    },
    {
      id: 5,
      title: "View Offers",
      poster: project2,
      action: "highlightAction",
      buttonText: "",
    },
    {
      id: 6,
      title: "View Offers",
      poster: project3,
      action: "highlightAction",
      buttonText: "",
    },
    {
      id: 7,
      title: "View Offers",
      poster: project1,
      action: "highlightAction",
      buttonText: "",
    },
  ];
};

const generateDataComponent = (): DataComponentItem[] => {
  return [
    {
      username: "Denis Onsare",
      avatar: project1,
      image: Banner1,
      action: "highlightAction",
      excerpt:
        "Productive's story begins with a great love for technology. Just as a sculptor loves to sculpt, as a poet loves to write songs - We love creating technological solutions that make people's lives better. Productives story begins with a great love for technology. Just as a sculptor loves to sculpt, as a poet loves to write songs - We love creating technological solutions that make people's lives better.",
    },
  ];
};

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface BannerItem {
  id: number;
  poster: string;
  title: string;
  buttonText?: string;
  action: string;
}

export interface DataComponentItem {
  avatar: string;
  image: string;
  username: string;
  action?: string;
  excerpt: string;
}

export type HomeComponent = CarouselItem[] | BannerItem[] | DataComponentItem[];

export interface HomepageData {
  components: {
    type: string;
    data: HomeComponent;
  }[];
}
