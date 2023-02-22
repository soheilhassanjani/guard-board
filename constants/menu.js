import DesktopIcon from "@com-icons/DesktopIcon";
import DocumentIcon from "@com-icons/DocumentIcon";
import DocumentPlusIcon from "@com-icons/DocumentPlusIcon";
import UsersPlusIcon from "@com-icons/UserPlusIcon";
import UsersIcon from "@com-icons/UsersIcon";

const menu = [
  {
    href: "/",
    label: "داشبورد",
    icon: DesktopIcon,
  },
  {
    href: "/soldiers",
    label: "لیست سرباز ها",
    icon: UsersIcon,
  },
  {
    href: "/add-soldier",
    label: "افزودن سرباز",
    icon: UsersPlusIcon,
  },
  {
    href: "/guard-boards",
    label: "لیست لوح های نگهبانی",
    icon: DocumentIcon,
  },
  {
    href: "/add-guard-boards",
    label: "ثبت لوح نگهبانی",
    icon: DocumentPlusIcon,
  },
];

export default menu;
