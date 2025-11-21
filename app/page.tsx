"use client";

import { experience } from "./data/data";

export default function Page() {
  return (
    <div className="px-4 md:px-2 flex flex-col gap-8 sm:gap-12 max-w-full">
      <p className="text-sm sm:text-base leading-relaxed">
        Full Stack Developer delivering scalable end-to-end solutions for web
        and mobile ecosystems. Actively working on a mobile application aimed at
        connecting people who are passionate about engaging in community-driven
        activities.
      </p>

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
