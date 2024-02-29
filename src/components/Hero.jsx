import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Slide from "./Slide";

const users = [
  {
    name: "One Step Closer To Your Dream Job",
    description:
      "Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.",
    photo_url:
      "https://res.cloudinary.com/dmuohnr8q/image/upload/v1707942028/pexels-photo-2379004-removebg-preview_bplx0p.png",
  },

  {
    name: "One Step Closer To Your Dream Job",
    description:
      "Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.",
    photo_url:
      "https://res.cloudinary.com/dmuohnr8q/image/upload/v1707941353/pexels-anna-nekrashevich-8993561-removebg-preview_izl8wu.png",
  },

  {
    name: "One Step Closer To Your Dream Job",
    description:
      "Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.",
    photo_url:
      "https://res.cloudinary.com/dmuohnr8q/image/upload/v1707941381/pexels-photo-1516680-removebg-preview_t4e1xa.png",
  },
];

const Hero = () => {
  return (
    <div className="container w-full h-full mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {users.map((user, index) => (
          <SwiperSlide key={index}>
            <Slide user={user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
