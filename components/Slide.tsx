interface SlideProps {
  title: string;
  image: string;
  type?: string;
  score: string;
}

function Slide({ image, title, score }: SlideProps) {
  return (
    <div className="rounded-lg flex flex-col gap-3 p-[5px] bg-[#282C35]">
      <div
        style={{
          height: `250px`,
          width: `180px`,
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="rounded-lg"
      >
      </div>
      <h1 className="truncate w-36 text-left">{title}</h1>
    </div>
  );
}

function SearchSlide({ image, title, type }: SlideProps) {
  return (
    <div className="rounded-lg flex flex-col gap-3 p-[5px] bg-[#282C35]">
      <div
        style={{
          height: `150px`,
          width: `100%`,
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="rounded-lg"
      >
      </div>
      <h1 className="truncate w-36 text-left">{title}</h1>
      <h1>{type}</h1>
    </div>
  );
}

export { SearchSlide, Slide };
