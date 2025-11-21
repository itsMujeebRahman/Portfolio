"use client";

import { works } from "../data/data";

export default function WorksPage() {
  return (
    <div className="px-4 md:px-2 flex flex-col gap-6">
      <h2 className="text-lg font-bold">Works</h2>

      <div className="flex flex-col gap-8">
        {works.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            {/* Title + Year */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-base text-blue-500 hover:underline sm:max-w-[70%]"
              >
                {item.title}
              </a>

              <div className="text-gray-500 text-sm sm:text-right">
                {item.year}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
