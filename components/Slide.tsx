interface SlideProps {
  title: string;
  image: string;
}

function Slide({ image, title }: SlideProps) {
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

export default Slide;
