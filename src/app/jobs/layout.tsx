"use client";

import React from "react";
import { NavigationMenuBar } from "../_components/nav-bar";
import { SessionProvider } from "next-auth/react";

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full" style={{ position: "relative" }}>
      <div
        className="w-full"
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      >
        <NavigationMenuBar isAuthenticated={true} />
      </div>
      <SessionProvider>{children}</SessionProvider>
    </section>
  );
}
