"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { NavigationMenuBar } from "../_components/nav-bar";

export default function VerifyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
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
