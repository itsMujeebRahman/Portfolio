"use client";

import { Briefcase, MapPin, Sun, Moon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const navButton =
    `text-sm px-2 py-1 rounded-xl cursor-pointer transition-all duration-300 ` +
    (currentTheme === "dark"
      ? "hover:bg-white hover:text-black"
      : "hover:bg-black hover:text-white");

  return (
    <div className="flex flex-wrap gap-4 px-4 md:px-2 justify-between items-center w-full">
      <div className="flex gap-2 items-center min-w-[200px]">
        <img
          src="/profilepic.png"
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
        <div className={navButton} onClick={() => router.replace("/")}>
          Home
        </div>

        <div className={navButton} onClick={() => router.replace("/works")}>
          Works
        </div>

        <div className={navButton} onClick={() => router.replace("/contact")}>
          Contacts
        </div>

        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
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
