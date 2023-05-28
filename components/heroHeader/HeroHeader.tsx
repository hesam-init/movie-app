import { PostersEntity } from "../../types/vitrinType.ts";

interface HeroHeaderProps {
  posters?: PostersEntity[];
}

function HeroHeader({ posters }: HeroHeaderProps) {
  return (
    <div className="bruh">
      <h1></h1>
    </div>
  );
}

export default HeroHeader;
