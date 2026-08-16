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
              {item.link ? (
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:max-w-[70%]">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-base text-blue-500 hover:underline"
                  >
                    {item.title}
                  </a>
                  {item.secondaryLink && (
                    <a
                      href={item.secondaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:underline"
                    >
                      Backend repository
                    </a>
                  )}
                </div>
              ) : (
                <div className="font-semibold text-base sm:max-w-[70%]">
                  {item.title}
                </div>
              )}

              <div className="text-gray-500 text-sm sm:text-right">
                {item.year}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 dark:border-gray-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
