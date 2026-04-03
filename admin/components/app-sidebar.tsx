"use client";

import FoodsPage from "@/app/dashboard/foods/page";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="flex flex-col gap-5 p-5">
        <div className="flex gap-2">
          <img src="/logo.svg" alt="logo" />
          <img src="/text.svg" alt="text" />
        </div>
        <div className="flex flex-col gap-5 p-5">
          <Link
            href="/dashboard/foods"
            className={
              '${pathname === "/dashboard/foods" && "bg-black text-white" }'
            }
          >
            <div className="flex gap-2">
              <img src="/dashboard.svg" alt="dashboard" />
              <p>Foods</p>
            </div>
          </Link>
          <Link
            href="/dashboard/orders"
            className={
              '${pathname === "/dashboard/orders" && "bg-black text-white"}'
            }
          >
            <div className="flex gap-2">
              <img src="/truck.svg" alt="truck" />
              <p>Orders</p>
            </div>
          </Link>
        </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
