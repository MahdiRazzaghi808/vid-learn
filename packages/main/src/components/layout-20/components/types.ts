import { VariantProps } from 'class-variance-authority';
import { type LucideIcon } from 'lucide-react';
import { badgeVariants } from '@repo/main/components/ui/badge';

export interface MenuItem {
  title?: string;
  tooltip?: string;
  desc?: string;
  img?: string;
  icon?: LucideIcon;
  path?: string;
  rootPath?: string;
  childrenIndex?: number;
  heading?: string;
  children?: MenuConfig;
  disabled?: boolean;
  collapse?: boolean;
  collapseTitle?: string;
  expandTitle?: string;
  badge?: string;
  badgeVariant?: VariantProps<typeof badgeVariants>['variant'];
  separator?: boolean;
}

export type MenuSidebarProps = {
  type: "main" | "resources";
  data: MenuItem[];
}[];


export type MenuConfig = MenuItem[];
