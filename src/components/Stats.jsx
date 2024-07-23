export default function Stats() {
  return (
    <div className="bg-silver py-16 text-info relative">
      <div className="container grid grid-cols-2 gap-32 mx-auto ">
        <div className="flex flex-col pt-10 gap-6 items-start justify-center">
          <h1 className="text-3xl font-bold">
            Helping a local
            <br />
            <span className="text-primary">business reinvent itself</span>
          </h1>
          <p>We reached here with our hard work and dedication?</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="grid grid-cols-2 items-center justify-center">
            <img
              width={80}
              src="/public/member.png"
              alt="Members"
              className="row-span-2"
            />
            <p className="text-2xl font-extrabold">2,245,341</p>
            <p className="font-light">Members</p>
          </div>
          <div className="grid grid-cols-2 items-center justify-center">
            <img
              width={80}
              src="/public/Clubn.png"
              alt="Members"
              className="row-span-2"
            />
            <p className="text-2xl font-extrabold">2,245,341</p>
            <p className="font-light">Members</p>
          </div>
          <div className="grid grid-cols-2 items-center justify-center">
            <img
              width={80}
              src="/public/bookings.png"
              alt="Members"
              className="row-span-2"
            />
            <p className="text-2xl font-extrabold">2,245,341</p>
            <p className="font-light">Members</p>
          </div>
          <div className="grid grid-cols-2 items-center justify-center">
            <img
              width={80}
              src="/public/payment.png"
              alt="Members"
              className="row-span-2"
            />
            <p className="text-2xl font-extrabold">2,245,341</p>
            <p className="font-light">Members</p>
          </div>
        </div>
      </div>
    </div>
  );
}
