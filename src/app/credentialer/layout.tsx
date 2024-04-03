"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { NavigationMenuBar } from "../_components/nav-bar";

export default function CredentialerPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ maxHeight: "calc(100vh - 256px)" }}>
      <div
        className="w-full"
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      >
        <NavigationMenuBar isAuthenticated={true} />
      </div>
      <div
        style={{
          height: "calc(100vh - 64px)",
          maxHeight: "calc(100vh - 64px)",
        }}
      >
        <SessionProvider>{children}</SessionProvider>
      </div>
    </section>
  );
}
