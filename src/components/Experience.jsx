export default function Experience() {
  return (
    <div className="py-16 text-info relative">
      <div className="container grid grid-cols-2 gap-32 mx-auto ">
        <div>
          <img src="/experience.png" alt="Hero Image" />
        </div>
        <div className="flex flex-col pt-10 gap-6 items-start justify-center">
          <h1 className="text-3xl font-bold">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            doloribus numquam atque nam reprehenderit nihil! Saepe tempora iste
            beatae aut atque quia labore perspiciatis maxime. Unde officiis
            cumque adipisci placeat repellendus, velit ratione distinctio totam
            in, eveniet animi reprehenderit provident neque eaque iure quae
            tenetur. Harum fuga blanditiis rerum totam.
          </p>
          <a className="btn cursor-pointer text-silver bg-primary py-4 px-7 rounded-lg hover:bg-secondary hover:text-primary transition-all ease-in duration-200">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
