import { Handlers, PageProps } from "$fresh/server.ts";
import { api } from "../api/config.ts";
import { apiRoute } from "../api/routes.ts";
import { Vitrin } from "../types/vitrinType.ts";
import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";
import SearchBar from "../islands/searchBar.tsx";
import NavBar from "../components/NavBar.tsx";
import HeroHeader from "../islands/HeroHeader.tsx";
import GenreSlider from "../components/GenreSlider.tsx";

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
        <link rel="stylesheet" href={asset("style/home.css")} />
      </Head>
      <div className="w-full flex items-center justify-center">
        <div className="w-full p-3 space-y-5 lg:max-w-screen-lg flex flex-col">
          {/* navbar */}
          <NavBar active="/" />

          {/* hero header section */}
          <HeroHeader posters={data.genres?.[1].posters?.slice(0, 9)} />

          {/* search bar */}
          {/* <SearchBar /> */}

          {/* sliders */}
          <div className="flex mt-8 flex-col gap-5 px-2 text-right">
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
