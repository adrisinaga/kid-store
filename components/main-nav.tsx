"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathName === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((routes) => (
        <Link
          key={routes.href}
          href={routes.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            routes.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {routes.label}
        </Link>
      ))}
    </nav>
  );
}
