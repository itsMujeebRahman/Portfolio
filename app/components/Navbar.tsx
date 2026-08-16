"use client";

import { Briefcase, MapPin, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme, systemTheme } = useTheme();

  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const navButton = (path: string) =>
    `text-sm px-2 py-1 rounded-xl cursor-pointer transition-all duration-300 ` +
    (pathname === path
      ? currentTheme === "dark"
        ? "bg-white text-black"
        : "bg-black text-white"
      : currentTheme === "dark"
        ? "hover:bg-white hover:text-black"
        : "hover:bg-black hover:text-white");

  return (
    <div className="flex flex-wrap gap-4 px-4 md:px-2 justify-between items-center w-full">
      <div className="flex gap-2 items-center min-w-[200px]">
        <Image
          src="/profilepic.png"
          alt="Mujeeb Rahman"
          width={80}
          height={80}
          className="rounded-full object-cover w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
        />

        <div className="flex flex-col gap-1">
          <div className="text-lg font-bold">Mujeeb Rahman</div>

          <div className="space-y-1 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin size={12} />
              <span className="text-xs">Kochi, India</span>
            </div>

            <div className="flex items-center gap-2">
              <Briefcase size={12} />
              <span className="text-xs">Software Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex gap-2 items-center flex-wrap justify-end">
        <Link className={navButton("/")} href="/">
          Home
        </Link>

        <Link className={navButton("/works")} href="/works">
          Works
        </Link>

        <Link className={navButton("/blog")} href="/blog">
          Blog
        </Link>

        <Link className={navButton("/contact")} href="/contact">
          Contacts
        </Link>

        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} theme`}
          className={
            `p-1 rounded-xl transition-all duration-300 cursor-pointer ` +
            (currentTheme === "dark" ? "hover:bg-white" : "hover:bg-black")
          }
        >
          {currentTheme === "dark" ? (
            <Sun size={18} className="text-white hover:text-black" />
          ) : (
            <Moon size={18} className="text-gray-700 hover:text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
