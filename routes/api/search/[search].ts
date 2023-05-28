import { HandlerContext, Handlers } from "$fresh/server.ts";
import { api } from "../../../api/config.ts";
import { apiRoute } from "../../../api/routes.ts";
import { Search } from "../../../types/searchType.ts";

export const handler: Handlers = {
  async GET(_req: Request, _ctx: HandlerContext) {
    const { search } = _ctx.params;

    const resp = await api(`${apiRoute.SEARCH}/${search}`);
    const data: Search = await resp.json();

    if (data.posters?.length === 0 || resp.status !== 200) {
      return new Response(null, {
        headers: { "Content-Type": "application/json" },
        status: 400,
      });
    }

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  },
};
