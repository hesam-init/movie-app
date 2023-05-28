interface SlideProps {
  title: string;
  image: string;
}

function Slide({ image, title }: SlideProps) {
  return (
    <div className="border p-1 bg-[#334756]">
      <div
        style={{
          height: `250px`,
          width: `200px`,
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
      </div>
      <h1 className="truncate w-36 text-left">{title}</h1>
    </div>
  );
}

export default Slide;
