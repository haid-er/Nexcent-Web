import Card from "./Card";
export default function Community() {
  return (
    <>
      <div className="text-info container mx-auto flex items-center justify-center flex-col px-96">
        <h1 className=" text-3xl font-bold text-center">
          Manage your entire community
          <br /> in a single system
        </h1>
        <p className="font-light">Who is Nexcent suitable for?</p>
      </div>
      <div className="flex mt-10">
        <Card
          image="../../public/mem1.png"
          primaryText="Membership Organization"
          secondaryText="Our membership management software provides full automation of membership renewals and payments"
        />
        <Card
          image="../../public/mem2.png"
          primaryText="National Associations"
          secondaryText="Our membership management software provides full automation of membership renewals and payments"
        />
        <Card
          image="../../public/mem3.png"
          primaryText="Clubs And Groups"
          secondaryText="Our membership management software provides full automation of membership renewals and payments"
        />
      </div>
    </>
  );
}
