import { Handlers, PageProps } from "$fresh/server.ts";
import { api } from "../api/config.ts";
import { apiRoute } from "../api/routes.ts";
import { Vitrin } from "../types/vitrinType.ts";

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
    <div>
      {data.countries?.map((data) => <h1>{data.title}</h1>)}
    </div>
  );
}
