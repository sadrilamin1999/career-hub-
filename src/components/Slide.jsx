import Button from "./Button";

const Slide = ({ user }) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-20 w-full  h-[744px]">
      <div className="md:h-full h-full flex items-center justify-center">
        <div className=" mt-10 flex flex-col gap-8">
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold">
            {user.name}
          </h2>
          <p className="lg:text-[23px]">{user.description}</p>
          <div className="">
            <Button text="Get Started" />
          </div>
        </div>
      </div>
      <div className="md:h-full h-full flex items-end justify-end overflow-hidden">
        <img
          className="w-full h-full object-contain "
          src={user.photo_url}
          alt={user.name}
        />
      </div>
    </div>
  );
};

export default Slide;
