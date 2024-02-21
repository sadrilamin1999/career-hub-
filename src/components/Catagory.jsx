import { BsCalculator } from "react-icons/bs";

const Catagory = () => {
  return (
    <section className="w-full  bg-indigo-50">
      <div className="container mx-auto py-24 ">
        <h4 className="text-6xl font-semibold text-center">Job catagories</h4>
        <p className="mt-4 text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="catagories grid md:grid-cols-3 gap-20 mt-10">
          {/* card */}
          <div className="p-10 bg-sky-50 flex flex-col hover:shadow-md duration-300">
            <div className="header">
              <div className="bg-sky-100 w-[70px] h-[70px] flex justify-center items-center">
                <BsCalculator className="h-[40px] w-[40px]" />
              </div>
            </div>
            <div className="body mt-8">
              <h4 className="text-2xl">Account & Finance</h4>
              <p className="mt-2">300 Jobs Available</p>
            </div>
          </div>
          <div className="p-10 bg-sky-50 flex flex-col hover:shadow-md duration-300">
            <div className="header">
              <div className="bg-sky-100 w-[70px] h-[70px] flex justify-center items-center">
                <BsCalculator className="h-[40px] w-[40px]" />
              </div>
            </div>
            <div className="body mt-8">
              <h4 className="text-2xl">Account & Finance</h4>
              <p className="mt-2">300 Jobs Available</p>
            </div>
          </div>
          <div className="p-10 bg-sky-50 flex flex-col hover:shadow-md duration-300">
            <div className="header">
              <div className="bg-sky-100 w-[70px] h-[70px] flex justify-center items-center">
                <BsCalculator className="h-[40px] w-[40px]" />
              </div>
            </div>
            <div className="body mt-8">
              <h4 className="text-2xl">Account & Finance</h4>
              <p className="mt-2">300 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catagory;
