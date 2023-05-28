import { Handlers, PageProps } from "$fresh/server.ts";
import { api } from "../api/config.ts";
import { apiRoute } from "../api/routes.ts";
import { Vitrin } from "../types/vitrinType.ts";
import { Head } from "$fresh/runtime.ts";
import GenreSlider from "../components/genreSlider/GenreSlider.tsx";
import HeroHeader from "../islands/HeroHeader.tsx";
import { asset } from "$fresh/runtime.ts";

export const handler: Handlers<Vitrin | null> = {
  async GET(_, ctx) {
    const resp = await api(apiRoute.VITRIN);
    const jsonData = await resp.json();
    if (resp.status !== 200) {
      return ctx.render(null);
    } else {
      const data: Vitrin = jsonData;
      return ctx.render(data);
    }
  },
};

export default function Page({ data }: PageProps<Vitrin | null>) {
  if (!data) {
    return <h1>No data</h1>;
  }

  return (
    <>
      <Head>
        <title>Chad</title>
        <link rel="stylesheet" href={asset("style/global.css")} />
      </Head>
      <div className="w-full flex items-center justify-center">
        <div className="w-full lg:max-w-screen-lg flex flex-col">
          <HeroHeader posters={data.genres?.[1].posters?.slice(0, 9)} />
          <div className="flex mt-8 flex-col gap-5 text-right px-3">
            {data.genres?.map((data) => (
              <GenreSlider
                key={data.id}
                id={data.id}
                title={data.title}
                posters={data.posters}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
