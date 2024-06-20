import {
  ArrowRight,
  Settings,
  Calendar,
  PiggyBank,
  MapPin,
  LayoutDashboard,
} from "lucide-react";
import { ElementType } from "react";

interface SidebarSub {
  name: string;
  href: string;
  icon?: ElementType;
}

interface SidebarGen {
  name: string;
  href: string;
  icon?: ElementType;
}

interface SidebarSubItems {
  name: string;
  subItems: SidebarSub[];
}

interface SidebarGenItems {
  name: string;
  generalItems: SidebarGen[];
}

const SidebarGeneralItems: SidebarGenItems[] = [
  {
    name: "Main",
    generalItems: [
      {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "",
      },
      {
        name: "Reservation",
        icon: Calendar,
        href: "reservation",
      },
      {
        name: "Donate",
        icon: PiggyBank,
        href: "donate",
      },
    ],
  },
];

const SidebarItems: SidebarSubItems[] = [
  {
    name: "Component",
    subItems: [
      {
        name: "Button",
        icon: ArrowRight,
        href: "button",
      },
      {
        name: "Badge",
        icon: ArrowRight,
        href: "badge",
      },
      {
        name: "Card",
        icon: ArrowRight,
        href: "card",
      },
      {
        name: "Input",
        icon: ArrowRight,
        href: "input",
      },
      {
        name: "Profile",
        icon: ArrowRight,
        href: "profile",
      },
      {
        name: "Marquee",
        icon: ArrowRight,
        href: "marquee",
      },
      {
        name: "Link",
        icon: ArrowRight,
        href: "link",
      },
      {
        name: "Chat",
        icon: ArrowRight,
        href: "chat",
      },
      {
        name: "Toast",
        icon: ArrowRight,
        href: "toast",
      },
    ],
  },
  {
    name: "Admin",
    subItems: [
      {
        name: "Branch",
        icon: MapPin,
        href: "branch",
      },
      {
        name: "User",
        icon: Settings,
        href: "user",
      },
    ],
  },
];

export { SidebarItems, SidebarGeneralItems };
