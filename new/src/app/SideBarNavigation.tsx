"use client";

import {
  HomeIcon,
  Share2Icon,
  VenetianMask,
  GitCompareArrowsIcon,
  DownloadIcon,
} from "lucide-react";

import { useActiveSectionContext } from "../app/activeContext";

// Type definitions
type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  badge?: string | number;
  active?: boolean;
  onClick?: () => void;
};

// type TeamProps = {
//   id: string;
//   label: string;
//   initial: string;
// };

type SidebarProps = {
  userName?: string;
  userImage?: string;
  darkMode?: boolean;
};

// Navigation item component
const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  badge,
  active = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between md:w-full py-2 px-3 rounded-md transition-colors ${
        active
          ? "bg-gray-800 text-white"
          : "text-gray-400 hover:bg-gray-800 hover:text-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="text-lg">{icon}</div>
        <span className="hidden md:block">{label}</span>
      </div>
      {badge && (
        <div
          className={`px-2 py-0.5 rounded-full text-xs ${
            active ? "bg-gray-700" : "bg-gray-800"
          }`}
        >
          {badge}
        </div>
      )}
    </button>
  );
};

// Team item component
// const TeamItem: React.FC<TeamProps> = ({ label, initial }) => {
//   return (
//     <button className="flex items-center gap-3 w-full py-2 px-3 rounded-md transition-colors text-gray-400 hover:bg-gray-800 hover:text-white">
//       <div className="flex items-center justify-center w-6 h-6 rounded bg-gray-800 text-white text-xs font-medium">
//         {initial}
//       </div>
//       <span>{label}</span>
//     </button>
//   );
// };

// Main sidebar component
const SidebarNavigation: React.FC<SidebarProps> = () => {
  const { active, setActive } = useActiveSectionContext();

  // Navigation data
  const navItems = [
    { id: "home", icon: <HomeIcon size={20} />, label: "Home" },
    { id: "about", icon: <VenetianMask size={20} />, label: "About" },
    // { id: "resume", icon: <PaperclipIcon size={20} />, label: "Resume" },
    {
      id: "projects",
      icon: <GitCompareArrowsIcon size={20} />,
      label: "Projects",
      badge: "7+",
    },
    // {
    //   id: "badges",
    //   icon: <TrophyIcon size={20} />,
    //   label: "Badges",
    //   badge: "20+",
    // },
    // { id: "education", icon: <SchoolIcon size={20} />, label: "Education" },
    { id: "contact", icon: <Share2Icon size={20} />, label: "Connect" },
  ];

  // Teams data
  // const teams = [
  //   { id: "heroicons", label: "NextJS", initial: "H" },
  //   { id: "tailwind", label: "Tailwind Labs", initial: "T" },
  //   { id: "workcation", label: "Software", initial: "W" },
  // ];

  return (
    <div
      className={`fixed translate-x-3 z-10 md:relative flex md:flex-col flex-row max-h-200 h-fit lg:min-h-150 rounded-xl align-middle mt-auto lg:ml-10 mb-auto lg:w-64 md:w-full w-fit m-auto bg-gray-950 backdrop-blur-3xl`}
    >
      <div className="md:flex hidden flex-col gap-4 items-center p-4 m-auto">
        {/* <Image src={Assest1} className="w-25 h-25 rounded-md" alt="image_1" /> */}
        <p className="font-bold text-xl">Welcome!</p>
      </div>

      <nav className="px-3 py-2 flex-1 overflow-y-auto ">
        <div className="space-y-1 flex lg:flex-col">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              badge={item.badge}
              active={active === item.id}
              onClick={() => {
                setActive(item.id);
              }}
            />
          ))}
        </div>

        {/* Interersts */}
        {/* <div className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Interests
          </h3>
          <div className="mt-2 space-y-1">
            {teams.map((team) => (
              <TeamItem
                key={team.id}
                id={team.id}
                label={team.label}
                initial={team.initial}
              />
            ))}
          </div>
        </div> */}
      </nav>

      {/* User Profile */}
      <div className="md:flex p-4 border-t border-gray-800 hidden">
        <div className="md:flex items-center justify-center w-full gap-3 text-left hidden">
          <a href="/Resume.pdf" download>
            <NavItem
              icon={<DownloadIcon size={20} />}
              label="Download Resume"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
