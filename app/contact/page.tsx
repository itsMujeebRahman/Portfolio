"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const hoverClass =
    currentTheme === "dark" ? "hover:text-white" : "hover:text-black";

  return (
    <div className="px-4 md:px-2 flex flex-col gap-4 w-full">
      <h2 className="text-lg font-bold">Contact</h2>

      <p className="text-sm md:text-base leading-relaxed">
        Got a project in mind or want to collaborate? Feel free to drop a
        message or connect through my social platforms below.
      </p>

      <div className="flex flex-col gap-4">
        <h3 className="text-md font-semibold">Connect with Me</h3>

        {/* ICONS -> Mobile responsive */}
        <div className="flex flex-wrap gap-4 text-gray-600">
          <a
            href="https://github.com/itsMujeebRahman"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverClass} transition-colors duration-300`}
          >
            <Github size={24} />
          </a>

          <a
            href="https://linkedin.com/in/mujeebrahman8943"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverClass} transition-colors duration-300`}
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mujeebrahman8943@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverClass} transition-colors duration-300`}
          >
            <Mail size={24} />
          </a>

          <a
            href="https://x.com/itsMujeebRahman"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverClass} transition-colors duration-300`}
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
