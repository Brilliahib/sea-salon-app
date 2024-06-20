import {
  ArrowRight,
  Settings,
  Calendar,
  PiggyBank,
  MapPin,
  LayoutDashboard,
} from "lucide-react";
import { ElementType } from "react";

export interface SidebarSub {
  name: string;
  href: string;
  icon?: ElementType;
}

export interface SidebarGen {
  name: string;
  href: string;
  icon?: ElementType;
}

export interface SidebarSubItems {
  name: string;
  subItems: SidebarSub[];
}

export interface SidebarGenItems {
  name: string;
  generalItems: SidebarGen[];
}

export const SidebarGeneralItems: SidebarGenItems[] = [
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

export const SidebarItems: SidebarSubItems[] = [
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
