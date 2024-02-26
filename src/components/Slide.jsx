import Button from "./Button";

const Slide = ({ user }) => {
  return (
    <div className=" mt-20 md:px-20 grid md:grid-cols-2 gap-x-20 w-full h-[800px]">
      <div className=" md:h-full h-full flex justify-center">
        <div className=" mt-20 flex flex-col gap-6">
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold leading-[100px]">
            {user.name}
          </h2>
          <p className="lg:text-[23px]">{user.description}</p>
          <div className="">
            <Button />
          </div>
        </div>
      </div>
      <div className="md:h-full h-full flex items-center justify-center overflow-hidden">
        <img
          className="w-[460px] lg:w-w-[460px] h-[500px] lg:h-[500px] object-contain "
          src={user.photo_url}
          alt={user.name}
        />
      </div>
    </div>
  );
};

export default Slide;
