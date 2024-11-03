import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  FaHome,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaUser,
  FaSearch,
} from "react-icons/fa";

interface NavItemProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

const NavItem: FC<NavItemProps> = ({ href, icon, label }) => (
  <Link
    className="flex items-center gap-3 p-2 rounded-full hover:bg-gray-100 transition-all"
    href={href}
  >
    {icon}
    <span className="text-lg font-medium">{label}</span>
  </Link>
);

const LeftNavbar: FC = () => {
  return (
    <div className="flex flex-col items-start p-4 w-64 h-screen border-r border-gray-200">
      <Link className="text-2xl font-bold mb-8 text-blue-500" href="/">
        <Image
          className="m-2"
          alt="logo"    
          src={"/icon_m.jpg"}
          width={40}
          height={40}
        ></Image>
      </Link>

      <nav className="flex flex-col gap-4">
        <NavItem href="/" icon={<FaHome className="h-6 w-6" />} label="Home" />
        <NavItem
          href="/explore"
          icon={<FaSearch className="h-6 w-6" />}
          label="Explore"
        />
        <NavItem
          href="/notifications"
          icon={<FaBell className="h-6 w-6" />}
          label="Notifications"
        />
        <NavItem
          href="/messages"
          icon={<FaEnvelope className="h-6 w-6" />}
          label="Messages"
        />
        <NavItem
          href="/bookmarks"
          icon={<FaBookmark className="h-6 w-6" />}
          label="Bookmarks"
        />
        <NavItem
          href="/profile"
          icon={<FaUser className="h-6 w-6" />}
          label="Profile"
        />
      </nav>

      <button className="mt-8 bg-blue-500 text-white rounded-full py-2 px-6 font-semibold w-full hover:bg-blue-600">
        Post
      </button>
    </div>
  );
};

export default LeftNavbar;
