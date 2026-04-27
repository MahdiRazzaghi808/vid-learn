import { Fragment } from "react";
import { ScrollArea } from "@repo/main/components/ui/scroll-area";
import { Separator } from "@repo/main/components/ui/separator";
import { SidebarHeader } from "./sidebar-header";
import { SidebarPrimaryMenu } from "./sidebar-primary-menu";
import { SidebarResourcesMenu } from "./sidebar-resources-menu";
import { MenuSidebarProps } from "./types";

export function SidebarSecondary({ menuSidebar }: { menuSidebar: MenuSidebarProps }) {
  return (
    <div className="flex flex-col items-stretch grow">
      <SidebarHeader />

      <ScrollArea className="shrink-0 py-2 h-[calc(100vh-4rem)]" dir="rtl">
        {menuSidebar.map((item, index) => {
          const isLast = index === menuSidebar.length - 1;

          return (
            <Fragment key={index}>
              {item.type === "main" && (
                <SidebarPrimaryMenu MENU_SIDEBAR_MAIN={item.data} />
              )}

              {item.type === "resources" && (
                <SidebarResourcesMenu MENU_SIDEBAR_RESOURCES={item.data} />
              )}

              {!isLast && <Separator className="my-2.5" />}
            </Fragment>
          );
        })}
      </ScrollArea>
    </div>
  );
}
