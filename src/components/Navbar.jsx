import "../App.css";
const Navbar = () => {
  return (
    <>
      <nav className="container grid xl:grid-cols-3 mx-auto py-10 items-center lg:grid-cols-3 md:grid-cols-1 md:items-center md:justify-center sm:grid-cols-1 xs:grid-cols-1 grid-cols-1">
        <a href="#" className="flex items-center justify-start">
          <img
            src="/Logo.png"
            alt="Logo of Nexcent Web"
            width={170}
            className="md:mb-14 sm:mb-14 lg:mb-0 mb-10"
          />
        </a>
        <div className="col-span-2">
          <ul className=" text-info font-normal grid grid-cols-7 items-center text-center ">
            <li>
              <a
                href="#"
                className="btn hover:bg-primary py-4 px-6 rounded-lg transition-all duration-300 hover:text-silver "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="btn hover:bg-primary py-4 px-6 rounded-lg transition-all duration-300 hover:text-silver "
              >
                Feature
              </a>
            </li>
            <li>
              <a
                href="#"
                className="btn hover:bg-primary py-4 px-6 rounded-lg transition-all duration-300 hover:text-silver "
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#"
                className="btn hover:bg-primary py-4 px-6 rounded-lg transition-all duration-300 hover:text-silver "
              >
                Blog
              </a>
            </li>
            <li className="btn">
              <a
                href="#"
                className="btn hover:bg-primary py-4 px-6 rounded-lg transition-all duration-300 hover:text-silver "
              >
                Pricing
              </a>
            </li>
            <li className="col-span-2">
              <a className="btn cursor-pointer text-silver bg-primary py-4 px-5 rounded-lg hover:bg-secondary hover:text-primary transition-all ease-in duration-200">
                Register Now &rarr;
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
