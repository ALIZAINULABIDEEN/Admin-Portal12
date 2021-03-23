/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CategoryIcon from '@material-ui/icons/Category';
import ViewListIcon from '@material-ui/icons/ViewList';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PolicyIcon from '@material-ui/icons/Policy';
import StarsIcon from '@material-ui/icons/Stars';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import FolderIcon from '@material-ui/icons/Folder';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Privacypolicy from "views/PrivacyPolicy/PrivacyPolicy";
import Categories from "views/Categories/Categories";
import Notification from "views/Notifications/Notifications"

import JobApplicants from "views/JobApplicants/JobApplicants.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import UserStats from "views/UserStats/Userstats";
import PrivacyPolicy from "views/PrivacyPolicy/PrivacyPolicy";
import { Policy } from "@material-ui/icons";
import Userinfo from "views/Userinfo/Userinfo";

const dashboardRoutes = [
  {
    path: "/contact_info",
    name: "Contact Details",
    rtlName: "لوحة القيادة",
    icon:  ViewListIcon,
    component: DashboardPage,
    layout: "/admin"
  },
  // {
  //   path: "/meal",
  //   name: "Meal",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: FastfoodIcon,
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/Categories",
  //   name: "Categories",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: CategoryIcon,
  //   component: Categories,
  //   layout: "/admin"
  // },
  // {
  //   path: "/popular",
  //   name: "Popular Meal & Exercise",
  //   rtlName: "قائمة الجدول",
  //   icon: StarsIcon,
  //   component: TableList,
  //   layout: "/admin"
  // },
 
  // {
  //   path: "/stats",
  //   name: "User Stats",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: UserStats,
  //   layout: "/admin"
  // },
  // {
  //   path: "/userinfo",
  //   name: "User Info",
  //   rtlName: "قائمة الجدول",
  //   icon: ViewListIcon ,
  //   component: Userinfo,
  //   layout: "/admin"
  // },
  // {
  //   path: "/policy",
  //   name: "Privacy Policy",
  //   rtlName: "قائمة الجدول",
  //   icon: PolicyIcon ,
  //   component: Privacypolicy,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Send Notification",
  //   rtlName: "قائمة الجدول",
  //   icon: NotificationsIcon,
  //   component: Notification,
  //   layout: "/admin"
  // },
  // {
  //   path: "/career",
  //   name: "JobApplicants",
  //   rtlName: "قائمة الجدول",
  //   icon: 
  //   FolderIcon,
  //   component: JobApplicants,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
