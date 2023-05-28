import { Handlers, PageProps } from "$fresh/server.ts";
import { api } from "../api/config.ts";
import { apiRoute } from "../api/routes.ts";
import { Vitrin } from "../types/vitrinType.ts";
import { Head } from "$fresh/runtime.ts";
import GenreSlider from "../components/genreSlider/GenreSlider.tsx";

export const handler: Handlers<Vitrin | null> = {
  async GET(_, ctx) {
    const resp = await api(apiRoute.VITRIN);
    const jsonData = await resp.json();
    if (resp.status !== 200) {
      return ctx.render(null);
    } else {
      const user: Vitrin = jsonData;
      return ctx.render(user);
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
        <link rel="stylesheet" href="style/global.css" />
      </Head>
      <div className="">
        <div className="flex flex-col gap-5 text-right p-3">
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
    </>
  );
}
