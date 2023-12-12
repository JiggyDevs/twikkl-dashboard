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
  { name: "Reports", href: "/dashboard/report", icon: ReportsIcon },
  { name: "Settings", href: "/dashboard/setting", icon: SettingsIcon },
];

export const cardsColorMap = {
  user: "bg-[#A09640]",
  post: "bg-[#40A066]",
  engagement: "bg-[#A0409C]",
  group: "bg-[#A05740]",
  wallet: "bg-[#404AA0]",
};

export const selectMonths = [
  { label: "January", value: 1 },
  { label: "Febuary", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
];

export const chartData = [
  { key: "Jan", value: 76 },
  { key: "Feb", value: 56 },
  { key: "Mar", value: 58 },
  { key: "Apr", value: 60 },
  { key: "May", value: 76 },
  { key: "Jun", value: 25 },
  { key: "Jul", value: 56 },
  { key: "Aug", value: 70 },
  { key: "Sep", value: 76 },
  { key: "Oct", value: 99 },
  { key: "Nov", value: 0 },
  { key: "Dec", value: 0 },
];

export const userSelectFilter = [
  { label: "0 - 1,000", value: "0 - 1,000" },
  { label: "1,000 - 5,000", value: "1,000 - 5,000" },
  { label: "5,000 - 10,000", value: "5,000-10,000" },
  { label: "10,000 - 100K", value: "10,000 - 100K" },
  { label: "100K - 1M", value: "100K - 1M" },
  { label: "1M - 10M", value: "1M - 10M" },
  { label: "10M above", value: "10M above" },
];
