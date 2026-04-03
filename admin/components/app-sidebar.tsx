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
            className={`${pathname === "/dashboard/foods" ? "bg-black text-white text-xl text-bold rounded-3xl p-2 ml-2" : ""}`}
          >
            <div className="flex gap-2">
              <img src="/dashboard.svg" alt="dashboard" />
              <p className="text-xl font-medium">Foods Menu</p>
            </div>
          </Link>

          <Link
            href="/dashboard/orders"
            className={`${pathname === "/dashboard/orders" ? "bg-black text-white text-xl text-bold rounded-3xl p-2 ml-2" : ""}`}
          >
            <div className="flex gap-2">
              <img src="/truck.svg" alt="truck" />
              <p className="text-xl font-medium">Orders</p>
            </div>
          </Link>

          <Link
            href="/dashboard/foods"
            // className={`${pathname === "/dashboard/foods" ? "bg-black text-white text-xl text-bold rounded-3xl p-2 ml-2" : ""}`}
          >
            <div className="flex gap-2">
              <img src="/settings.svg" alt="dashboard" />
              <p className="text-xl font-medium">Settings</p>
            </div>
          </Link>
        </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
