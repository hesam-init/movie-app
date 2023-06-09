import { PostersEntity } from "@/types/vitrinType.ts";
import { Slide } from "./Slide.tsx";

interface GenreSliderProps {
  id?: number;
  title?: string;
  posters?: PostersEntity[];
}

function GenreSlider({ id, title, posters }: GenreSliderProps) {
  return (
    <div className="text">
      <h1 className="genre-title text-lg font-bold">{title}</h1>
      <div className="mt-3 flex gap-2 overflow-x-hidden">
        {posters?.map((data) => (
          <Slide
            image={data.image}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
}

export default GenreSlider;
