import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@repo/main/components/ui/breadcrumb";
import { Button } from "@repo/main/components/ui/button";
import { PanelRight } from "lucide-react";
import { useLayout } from "@repo/main/components/layout-20/components/context";
import Link from "next/link";
import React from "react";

type BreadcrumbItemType = {
  title: string;
  href?: string;
};

interface HeaderTitleProps {
  items: BreadcrumbItemType[];
}

export function HeaderTitle({ items }: HeaderTitleProps) {
  const { isSidebarOpen, isMobile, sidebarToggle } = useLayout();

  const lastIndex = items.length - 1;

  return (
    <div className="flex flex-col items-start justify-center gap-0.5 pb-5 lg:pb-0 lg:mb-0 lg:px-0">
      <div className="flex items-center gap-2">
        {(!isSidebarOpen && !isMobile) && (
          <Button mode="icon" variant="dim" onClick={() => sidebarToggle()} className="-ms-2">
            <PanelRight />
          </Button>
        )}
        <div>
          {items[lastIndex] && (
            <h1 className="text-base font-semibold text-foreground">
              {items[lastIndex].title}
            </h1>
          )}
          <Breadcrumb>
            <BreadcrumbList>
              {items.map((item, idx) => (
                <React.Fragment key={idx}>
                  <BreadcrumbItem>
                    {idx === lastIndex || !item.href ? (
                      <BreadcrumbPage>{item.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={item.href}>{item.title}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {idx < lastIndex && (
                    <BreadcrumbSeparator className="text-xs text-muted-foreground">/</BreadcrumbSeparator>
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}
