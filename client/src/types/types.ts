import React from "react";
type HamBurgerProps = {
  onClick: () => void;
};
type MobileNavBarProps = {
  toggleIsDarkMode: () => void;
};
type LinkType = {
  type: "login" | "getstarted";
  linkName: string;
  link: string;
};
type NavLinkProp = LinkType;
type PageLayoutProp = {
  children: React.ReactNode;
};
type RatesType = {
  USD?: number;
  CAD?: number;
  GBP?: number;
  EUR?: number;
};
type FeatureCardType = {
  featureIcon: React.FC;
  featureHeader: string;
  featureDescription: string;
};
type FeatureCardProps = FeatureCardType;
type ArrowIconProps = {
  isHover: boolean;
  setIsHoverTrue: () => void;
  setIsHoverFalse: () => void;
};
type UserLinkType = {
  linkName: string;
  link: string;
};
type UserLinkProps = UserLinkType;
type UserCardType = {
  userImage: string;
  bundleLink: string;
  bundleName: string;
};
type TabType = "Dashboard" | "My Bundle";
type SideBarProps = {
  switchTab: (tabName: TabType) => void;
};
type SideBarLinkListProps = SideBarProps;
type SideBarLinkType = {
  tabName: TabType;
};
type SideBarLinkProps = SideBarProps & SideBarLinkType;
interface userType {
  id: string;
  email: string;
  username: string;
  emailVerified: boolean;
  profilePicture: string;
  bundles: [string];
}
interface AuthContextType {
  isAuthenticated: boolean;
  token: string;
  user: userType;
  loading: boolean;
  login: (token: string, user: userType) => void;
  logout: () => void;
}
interface bitType {
  _id: string;
  title: string;
  url: string;
}
interface bitItemProps extends bitType {
  getBits: () => void;
}
export interface DemoBitType {
  title: string;
  url: string;
  icon?: string;
  isPinned: boolean;
  order: number;
}
interface DemoBundleType {
  bundleName: string;
  displayName: string;
  bio?: string;
  bits: DemoBitType[];
  theme?: string;
}
export type {
  DemoBundleType,
  bitType,
  bitItemProps,
  TabType,
  SideBarProps,
  SideBarLinkListProps,
  SideBarLinkType,
  SideBarLinkProps,
  HamBurgerProps,
  MobileNavBarProps,
  LinkType,
  PageLayoutProp,
  NavLinkProp,
  RatesType,
  FeatureCardType,
  FeatureCardProps,
  ArrowIconProps,
  UserLinkType,
  UserLinkProps,
  UserCardType,
  userType,
  AuthContextType,
};
