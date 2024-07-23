export default function Hero() {
  return (
    <div className="bg-silver py-16 text-info relative">
      <div className="container grid grid-cols-2 gap-32 mx-auto ">
        <div className="flex flex-col pt-10 gap-6 items-start justify-center">
          <h1 className="text-6xl font-bold">
            Lesson and insights{" "}
            <span className="text-primary">from 8 years</span>
          </h1>
          <p>
            Where to grow your bussiness as a photographer: site or social
            media?
          </p>
          <a className="btn cursor-pointer text-silver bg-primary py-4 px-7 rounded-lg hover:bg-secondary hover:text-primary transition-all ease-in duration-200">
            Register
          </a>
        </div>
        <div>
          <img src="/Illustration-hero.png" alt="Hero Image" />
        </div>
        <div className="absolute bottom-0 left-1/2 h-3 w-3 rounded-full bg-primary mb-3"></div>
        <div className="absolute bottom-0 left-1/2 ms-5 h-3 w-3 rounded-full bg-primary opacity-50 mb-3"></div>
        <div className="absolute bottom-0 left-1/2 h-3 ms-10 w-3 rounded-full bg-primary opacity-50 mb-3"></div>
      </div>
    </div>
  );
}
