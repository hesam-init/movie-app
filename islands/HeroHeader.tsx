import { useEffect, useState } from "preact/hooks";
import { PostersEntity } from "../types/vitrinType.ts";
import IconArrowBadgeRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-badge-right.tsx";
import IconArrowBadgeLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-badge-left.tsx";

interface HeroHeaderProps {
  posters: PostersEntity[] | undefined;
}

function HeroHeader({ posters }: HeroHeaderProps) {
  const [activePoster, setActivePoster] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextPoster();
    }, 3000);
    return () => clearInterval(interval);
  }, [activePoster]);

  function resetPoster() {
    if (posters !== undefined && activePoster === posters?.length - 1) {
      setActivePoster(0);
    }
  }

  function nextPoster() {
    resetPoster();
    if (posters !== undefined && activePoster < posters?.length - 1) {
      setActivePoster(activePoster + 1);
    }
  }

  function prevPoster() {
    if (activePoster === 0) {
      return;
    } else {
      setActivePoster(activePoster - 1);
    }
  }

  return (
    <div className="w-full h-96 mt-5 px-2 overflow-hidden">
      <div className="bg-[#1A1C22] flex  rounded-lg h-full overflow-hidden">
        {/* cover image */}
        <div
          className="relative w-2/3 h-full"
          style={{
            backgroundImage: `url(${posters?.[activePoster].cover})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="bottom-3 absolute w-full px-3">
            <p className="m-0 w-full bg-black rounded-lg pt-2 px-3 pb-1">
              {posters?.[activePoster].title}
            </p>
          </div>
        </div>

        {/* slider */}
        <div className="flex-col items-center justify-evenly flex-1 h-full flex">
          {/* title */}
          <h1>{posters?.[activePoster].title}</h1>
          {/* poster */}
          <div className="flex items-center gap-3">
            <button
              className="outline-none border-none"
              onClick={prevPoster}
            >
              <IconArrowBadgeLeft />
            </button>
            <div
              className="rounded-lg shadow-lg"
              style={{
                height: "250px",
                width: "180px",
                backgroundImage: `url(${posters?.[activePoster].cover})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
            </div>
            <button
              className="outline-none border-none"
              onClick={nextPoster}
            >
              <IconArrowBadgeRight />
            </button>
          </div>
          {/* paginate */}
          <div className="flex gap-1">
            {Array(posters?.length).fill("").map((_, _idx) => (
              <div
                onClick={() => {
                  setActivePoster(_idx);
                }}
                className={`relative border w-4 h-4 rounded-full`}
              >
                {activePoster === _idx && (
                  <div className="w-2 h-2 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
