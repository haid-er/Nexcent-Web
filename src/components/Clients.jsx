export default function Clients() {
  return (
    <>
      <div className="container my-10 mx-auto text-info">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="my-10 flex justify-between items-center px-56 ">
          <a href="#">
            <img width={40} src="/logo-company-1.png" alt="Company 1 logo" />
          </a>
          <a href="#">
            <img width={40} src="/logo-company-2.png" alt="Company 2 logo" />
          </a>
          <a href="#">
            <img width={40} src="/logo-company-3.png" alt="Company 3 logo" />
          </a>
          <a href="#">
            <img width={40} src="/logo-company-4.png" alt="Company 4 logo" />
          </a>
          <a href="#">
            <img width={40} src="/logo-company-5.png" alt="Company 5 logo" />
          </a>
          <a href="#">
            <img width={40} src="/logo-company-6.png" alt="Company 6 logo" />
          </a>
        </div>
      </div>
    </>
  );
}
