import Catagory from "../components/Catagory";
import Hero from "../components/Hero";
import Featured from "./../components/Featured";

const Home = () => {
  return (
    <div className=" w-full h-full">
      <Hero />
      <Catagory />
      <Featured />
    </div>
  );
};

export default Home;
