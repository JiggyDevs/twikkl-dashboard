import {
  DashboardHomeIcon,
  UsersIcon,
  GroupsIcon,
  WalletsIcon,
  ReportsIcon,
  SettingsIcon,
} from "../../../../public/svg";

export const navLinks = [
  { name: "Home", href: "/dashboard", icon: DashboardHomeIcon },
  { name: "Users", href: "/dashboard/users", icon: UsersIcon },
  { name: "Groups", href: "/dashboard/groups", icon: GroupsIcon },
  { name: "Wallets", href: "/dashboard/wallets", icon: WalletsIcon },
  { name: "Reports", href: "/dashboard/reports", icon: ReportsIcon },
  { name: "Settings", href: "/dashboard/settings", icon: SettingsIcon },
];

export const cardsColorMap = {
  user: "bg-[#A09640]",
  post: "bg-[#40A066]",
  engagement: "bg-[#A0409C]",
  group: "bg-[#A05740]",
  wallet: "bg-[#404AA0]",
};
