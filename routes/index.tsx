import { Handlers, PageProps } from "$fresh/server.ts";
import { api } from "../api/config.ts";
import { Vitrin } from "../types/vitrinType.ts";

export const handler: Handlers<Vitrin | null> = {
  async GET(_, ctx) {
    const resp = await api.get("first/4F5A9C3D9A86FA54EACEDDD635185/");
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: Vitrin = await resp.data;
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<Vitrin | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      {data.countries?.map((data) => <h1>{data.title}</h1>)}
    </div>
  );
}
