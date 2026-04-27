import { MenuConfig, MenuSidebarProps } from "@repo/main/menu-config";
import {
  Bolt,
  Briefcase,
  ChartLine,
  Cog,
  Download,
  FileChartLine,
  Megaphone,
  Newspaper,
  SquareActivity,
  UserRoundCog,
  Users
} from "lucide-react";

const MENU_SIDEBAR_MAIN: MenuConfig = [
  {
    children: [
      {
        title: 'خانه',
        path: '#',
        icon: Bolt
      },
      {
        title: 'به‌روزرسانی‌ها',
        path: '/layout-20',
        icon: Users
      },
      {
        title: 'صندوق پیام‌ها',
        path: '#',
        icon: UserRoundCog
      },
      {
        title: 'مشتریان',
        path: '#',
        icon: Cog,
        badge: 'نسخه آزمایشی',
        badgeVariant: 'destructive'
      },
      {
        title: 'وظایف من',
        path: '#',
        icon: ChartLine
      },
    ],
  }
];

const MENU_SIDEBAR_RESOURCES: MenuConfig = [
  {
    title: 'منابع',
    children: [
      {
        title: 'درباره مترو‌نیک',
        path: '#',
        icon: Download
      },
      {
        title: 'تبلیغات',
        path: '#',
        icon: FileChartLine,
        badge: 'حرفه ای',
        badgeVariant: 'success'
      },
      {
        title: 'راهنما',
        path: '#',
        icon: SquareActivity
      },
      {
        title: 'وبلاگ',
        path: '#',
        icon: Newspaper
      },
      {
        title: 'فرصت‌های شغلی',
        path: '#',
        icon: Briefcase
      },
      {
        title: 'اخبار رسانه‌ای',
        path: '#',
        icon: Megaphone
      },
    ],
  }
];


export const menuSidebar: MenuSidebarProps = [
  {
    type: "main",
    data: MENU_SIDEBAR_MAIN
  },
  {
    type: "resources",
    data: MENU_SIDEBAR_RESOURCES
  }
]