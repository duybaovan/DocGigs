"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PartialGigJobBoard } from "../_components/gig-job-board";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/jobs");
    }
  }, [status, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 pt-16">
      <PartialGigJobBoard />
    </main>
  );
}
