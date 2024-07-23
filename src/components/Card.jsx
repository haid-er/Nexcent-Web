export default function Card(prop) {
  return (
    <>
      <div className="px-5 py-10 shadow-md w-72 flex items-center justify-center flex-col text-info mx-auto hover:shadow-lg transition-all duration-300">
        <img src={prop.image} alt="image of card" />
        <h1 className=" text-3xl font-bold my-8 text-center">
          {prop.primaryText}
        </h1>
        <p className="font-light text-center">{prop.secondaryText}</p>
      </div>
    </>
  );
}
