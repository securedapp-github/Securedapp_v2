import { ReactComponent as HistoryLogo } from "./images/sidebar-history.svg";
import { ReactComponent as LogoutLogo } from "./images/sidebar-logout.svg";
import { ReactComponent as OverviewLogo } from "./images/sidebar-overview.svg";
import { ReactComponent as SettingsLogo } from "./images/sidebar-settings.svg";
import { ReactComponent as VulnerabilityLogo } from "./images/sidebar-vulnerability.svg";

export const sidebarItems = [
  {
    image: OverviewLogo,
    name: "Overview",
  },
  {
    image: HistoryLogo,
    name: "History",
  },
  {
    image: VulnerabilityLogo,
    name: "Vulnerability Scans",
  },
  {
    image: SettingsLogo,
    name: "Audit Certificate",
  },
  {
    image: SettingsLogo,
    name: "Settings",
  },
  {
    image: LogoutLogo,
    name: "Log Out",
  },
];
