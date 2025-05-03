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
type TabType = "Dashboard" | "Blog";
type SideBarProps = {
  switchTab: (tabName: TabType) => void;
};
type SideBarLinkListProps = SideBarProps;
type SideBarLinkType = {
  tabName: TabType;
};
type SideBarLinkProps = SideBarProps & SideBarLinkType;
export type {
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
};
