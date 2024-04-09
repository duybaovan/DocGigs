"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { NavigationMenuBar } from "../_components/nav-bar";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <SessionProvider>
        <div
          className="w-full"
          style={{ position: "sticky", top: 0, zIndex: 1000 }}
        >
          <NavigationMenuBar />
        </div>
        {children}
      </SessionProvider>
    </section>
  );
}
