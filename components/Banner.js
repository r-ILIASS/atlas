import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/images/banner.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />
      <div className="absolute h-full w-full flex flex-col space-y-5 justify-center items-center">
        <p className="text-sm sm:text-lg font-bold">Not sure where to go?</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-150">
          Follow us
        </button>
      </div>
    </div>
  );
}

export default Banner;
