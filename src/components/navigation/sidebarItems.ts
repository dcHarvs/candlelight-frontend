import { SidebarItem } from "./Sidebar";
import { faChartLine, faGears, faMoneyBill, faTableList, faCalculator, faList } from "@fortawesome/free-solid-svg-icons";

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", icon: faChartLine, link: "/" },
  {
    label: "Maintenance",
    icon: faGears,
    link: "/maintenance",
    items: [
      { label: "Chart of Accounts", icon: faCalculator, link: "/maintenance/chart-of-accounts" },
      { label: "Customers", icon: faList, link: "/maintenance/vendors" },
      { label: "Vendors", icon: faList, link: "/maintenance/customers" },
    ]
  },
  { label: "Sales", icon: faMoneyBill, link: "/sales" },
  { label: "Reports", icon: faTableList, link: "/reports" },
];

export default sidebarItems;