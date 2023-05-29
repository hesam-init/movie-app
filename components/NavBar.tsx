import IconMovie from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/movie.tsx";

interface Props {
  active: string;
}

function NavBar({ active }: Props) {
  const menus = [
    { name: "خانه", href: "/" },
    { name: "فیلم", href: "/movie" },
    { name: "سریال", href: "/series" },
    { name: "آموزش", href: "/faq" },
  ];

  return (
    <div className="navbar mt-3 justify-between py-4 px-5 rounded-xl flex bg-[#1A1C22]">
      {/* icon */}
      <div>
        <IconMovie />
        <h1></h1>
      </div>

      {/* menus */}
      <ul class="flex flex-row-reverse items-center gap-4">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              className={`${
                menu.href === active
                  ? "border-b-2 text-xl text-white border-white"
                  : "text-gray-500 border-gray-500"
              } hover:text-gray-700`}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
