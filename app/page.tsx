"use client";

import { experience, skills } from "./data/data";
import {
  SiCss,
  SiExpo,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSanity,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava, FaWindows } from "react-icons/fa";
import { TbDatabase, TbSql } from "react-icons/tb";

const skillIcons = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "currentColor" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  Expo: { Icon: SiExpo, color: "currentColor" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Supabase: { Icon: SiSupabase, color: "#3FCF8E" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  SQL: { Icon: TbSql, color: "#4479A1" },
  MSSQL: { Icon: TbDatabase, color: "#CC2927" },
  Java: { Icon: FaJava, color: "#ED8B00" },
  Python: { Icon: SiPython, color: "#3776AB" },
  "Sanity CMS": { Icon: SiSanity, color: "#F03E2F" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  GitHub: { Icon: SiGithub, color: "currentColor" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Linux: { Icon: SiLinux, color: "#FCC624" },
  Windows: { Icon: FaWindows, color: "#0078D4" },
};

export default function Page() {
  return (
    <div className="px-4 md:px-2 flex flex-col gap-8 sm:gap-12 max-w-full">
      <p className="text-sm sm:text-base leading-relaxed">
        Full Stack Software Developer with hands-on experience building reliable
        web and mobile applications, backed by a strong foundation in software
        quality assurance. I create scalable, user-focused products with modern
        frameworks, clean code, and a quality-first approach.
      </p>

      <div className="flex flex-col gap-6">
        <h2 className="text-lg sm:text-xl font-bold">Skills</h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {skills.map((group) => {
            return (
              <div key={group.category} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const { Icon, color } =
                      skillIcons[skill as keyof typeof skillIcons];

                    return (
                      <span
                        key={skill}
                        className="flex items-center gap-1.5 rounded-full border border-gray-300 px-2.5 py-1 text-xs dark:border-gray-700"
                      >
                        <Icon
                          size={14}
                          color={color}
                          aria-hidden="true"
                          className="shrink-0"
                        />
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="text-lg sm:text-xl font-bold">Experience</h2>

        <div className="flex flex-col gap-6 sm:gap-6">
          {experience.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="text-sm sm:text-base font-medium">
                  {item.role}
                </div>

                <div className="text-gray-500 text-xs sm:text-sm">
                  {item.year}
                </div>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
