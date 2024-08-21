import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaDiscord } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockNav() {
  return (
    <nav
      className="sticky bottom-5 w-full flex items-center justify-center"
      aria-label="Social media links"
    >
      <div className="relative">
        <TooltipProvider delayDuration={2}>
          <Dock direction="middle">
            <DockIcon>
              <a
                href="https://www.linkedin.com/in/walid-araar-676a37280/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Tooltip>
                  <TooltipTrigger aria-label="LinkedIn profile button">
                    <FaLinkedin className="size-5" aria-hidden="true" />
                  </TooltipTrigger>
                  <TooltipContent className="py-1 px-2 text-xs bg-foreground text-white">
                    LinkedIn
                  </TooltipContent>
                </Tooltip>
              </a>
            </DockIcon>
            <DockIcon>
              <a
                href="https://github.com/WalidAra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Tooltip>
                  <TooltipTrigger aria-label="GitHub profile button">
                    <FaGithub className="size-5" aria-hidden="true" />
                  </TooltipTrigger>
                  <TooltipContent className="py-1 px-2 text-xs bg-foreground text-white">
                    Github
                  </TooltipContent>
                </Tooltip>
              </a>
            </DockIcon>
            <DockIcon>
              <a href="mailto:arawalid90@example.com" aria-label="Send email">
                <Tooltip>
                  <TooltipTrigger aria-label="Email message button">
                    <HiOutlineMail className="size-5" aria-hidden="true" />
                  </TooltipTrigger>
                  <TooltipContent className="py-1 px-2 text-xs bg-foreground text-white">
                    Email
                  </TooltipContent>
                </Tooltip>
              </a>
            </DockIcon>
            <DockIcon>
              <a
                href="https://discord.com/users/1069678365159735340"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord profile"
              >
                <Tooltip>
                  <TooltipTrigger aria-label="Discord profile button">
                    <FaDiscord className="size-5" aria-hidden="true" />
                  </TooltipTrigger>
                  <TooltipContent className="py-1 px-2 text-xs bg-foreground text-white">
                    Discord
                  </TooltipContent>
                </Tooltip>
              </a>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>
    </nav>
  );
}
