interface SlideProps {
  title: string;
  image: string;
}

function Slide({ image, title }: SlideProps) {
  return (
    <div className="border">
      <h1 className="truncate">{title}</h1>
      <img width={140} src={image} alt={title} />
    </div>
  );
}

export default Slide;
