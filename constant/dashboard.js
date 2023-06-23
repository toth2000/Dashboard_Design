import dashboard_icon from "../public/dashboard_icon.svg";
import transaction_icon from "../public/transaction_icon.svg";
import user_icon from "../public/user_icon.svg";
import setting_icon from "../public/setting_icon.svg";
import schedule_icon from "../public/schedule_icon.svg";

import summary_revenue_icon from "../public/summary_revenue_icon.svg";
import summary_transactions_icon from "../public/summary_transactions_icon.svg";
import summary_likes_icon from "../public/summary_likes_icon.svg";
import summary_user_icon from "../public/summary_user_icon.svg";

export const menu = [
  { id: 0, text: "Dashboard", icon: dashboard_icon },
  { id: 1, text: "Transactions", icon: transaction_icon },
  { id: 2, text: "Schedules", icon: schedule_icon },
  { id: 3, text: "User", icon: user_icon },
  { id: 4, text: "Settings", icon: setting_icon },
];

export const summary = [
  {
    id: 0,
    Title: "Total Revenues",
    Value: "$2,129,430",
    icon: summary_revenue_icon,
    background: "#DDEFE0",
  },
  {
    id: 1,
    Title: "Total Transactions",
    Value: "1,520",
    icon: summary_transactions_icon,
    background: "#F4ECDD",
  },
  {
    id: 2,
    Title: "Total Likes",
    Value: "9,721",
    icon: summary_likes_icon,
    background: "#EFDADA",
  },
  {
    id: 3,
    Title: "Total Users",
    Value: "892",
    icon: summary_user_icon,
    background: "#DEE0EF",
  },
];

export const samplePieData = {
  data: [
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 },
  ],
  labels: [
    { title: "Basic Tees", value: "55%", color: "#98D89E" },
    { title: "Custom Short Pants", value: "31%", color: "#F6DC7D" },
    { title: "Super Hoodies", value: "14%", color: "#EE8484" },
  ],
};

export const scheduleItem = [
  {
    id: 0,
    title: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    location: "Sunset Road, Kuta, Bali",
    color: "#9BDD7C",
  },
  {
    id: 1,
    title: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    location: "Central Jakarta",
    color: "#6972C3",
  },
];
