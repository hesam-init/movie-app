import { Handlers, PageProps } from "$fresh/server.ts";

import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";
import NavBar from "@/components/NavBar.tsx";

export default function MoviePage(props: PageProps) {
  return (
    <>
      <Head>
        <title>Movies List</title>
        <link rel="stylesheet" href={asset("style/global.css")} />
      </Head>
      <div className="w-full flex items-center justify-center">
        <div className="w-full p-3 space-y-5 lg:max-w-screen-lg flex flex-col">
          {/* navbar */}
          <NavBar active={props.route} />
        </div>
      </div>
    </>
  );
}
