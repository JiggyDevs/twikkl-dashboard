import {
  DashboardHomeIcon,
  UsersIcon,
  GroupsIcon,
  WalletsIcon,
  ReportsIcon,
  SettingsIcon,
} from "../../../../public/svg";
import {
  TwikkleGroupsAttribute,
  TwikkleUsersAttribute,
  TwikkleWalletsAttribute,
} from "../types";
import { ColumnDefinitionType } from "../types/components";

export const navLinks = [
  { name: "Home", href: "/dashboard", icon: DashboardHomeIcon },
  { name: "Users", href: "/dashboard/users", icon: UsersIcon },
  { name: "Groups", href: "/dashboard/groups", icon: GroupsIcon },
  { name: "Wallets", href: "/dashboard/wallets", icon: WalletsIcon },
  { name: "Reports", href: "/dashboard/report", icon: ReportsIcon },
  { name: "Settings", href: "/dashboard/setting", icon: SettingsIcon },
];

export const cardsColorMap = {
  lightOrange: "bg-[#A09640]",
  green: "bg-[#40A066]",
  purple: "bg-[#A0409C]",
  darkOrange: "bg-[#A05740]",
  darkBlue: "bg-[#404AA0]",
};

export const singleUserInfo = [
  { label: "Total posts", value: "23" },
  { label: "Followers", value: "20.5k" },
  { label: "Following", value: "500k" },
  { label: "Total points", value: "60" },
];

export const selectMonths = [
  { label: "January", value: 1 },
  { label: "Febuary", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
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

export const durationType = [
  { label: "Today", value: "today" },
  { label: "This Week", value: "this_week" },
  { label: "This Month", value: "this_month" },
];

export const timeLine = [
  { label: "Today", value: "today" },
  { label: "Last 1 hour", value: "last-1-hour" },
  { label: "Last 30 minutes", value: "last-30-minutes" },
  { label: "Just now", value: "now" },
];

export const userTableHeaders: ColumnDefinitionType<
  TwikkleUsersAttribute,
  keyof TwikkleUsersAttribute
>[] = [
  { label: "Username", key: "username" },
  { label: "Gender", key: "gender" },
  { label: "Points", key: "points" },
  { label: "Followers", key: "followers" },
  { label: "Following", key: "following" },
  { label: "Posts", key: "posts" },
  { label: "Date Joined", key: "joinedDate" },
];

export const groupTableHeaders: ColumnDefinitionType<
  TwikkleGroupsAttribute,
  keyof TwikkleGroupsAttribute
>[] = [
  { label: "Group Name", key: "name" },
  { label: "Created By", key: "createdBy" },
  { label: "Group Type", key: "type" },
  { label: "Members", key: "members" },
  { label: "Date Created", key: "date" },
];

export const walletTableHeaders: ColumnDefinitionType<
  TwikkleWalletsAttribute,
  keyof TwikkleWalletsAttribute
>[] = [
  { label: "Username", key: "username" },
  { label: "Wallet Balance", key: "balance" },
  { label: "Digital Art", key: "digitalArt" },
  { label: "Tokens", key: "tokens" },
  { label: "Wallet Address", key: "address" },
];
