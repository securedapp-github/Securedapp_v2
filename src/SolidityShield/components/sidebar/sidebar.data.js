import { ReactComponent as HistoryLogo } from "./images/sidebar-history.svg";
import { ReactComponent as LogoutLogo } from "./images/sidebar-logout.svg";
import { ReactComponent as OverviewLogo } from "./images/sidebar-overview.svg";
import { ReactComponent as SettingsLogo } from "./images/sidebar-settings.svg";
import { ReactComponent as VulnerabilityLogo } from "./images/sidebar-vulnerability.svg";
import { ReactComponent as PaymentsLogo } from "./images/sidebar-payment.svg";

export const sidebarItems = [
  {
    image: OverviewLogo,
    name: "Overview",
    to: "overview",
  },
  {
    image: HistoryLogo,
    name: "History",
    to: "history",
  },
  // {
  //   image: VulnerabilityLogo,
  //   name: "Vulnerability Scans",
  //   to: "vulnerability-scans",
  // },
  // {
  //   image: SettingsLogo,
  //   name: "Audit Certificate",
  //   to: "audit-certificate",
  // },
  {
    image: PaymentsLogo,
    name: "Payment",
    to: "payment",
  },
  // {
  //   image: SettingsLogo,
  //   name: "Settings",
  //   to: "settings",
  // },
  {
    image: LogoutLogo,
    name: "Log Out",
  },
];
