"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { GigJobBoard } from "../_components/gig-job-board";

export default function JobsBoard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(status);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/home");
    }
  }, [router, status]);

  if (!session) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <div className="container mt-4 flex flex-row items-center justify-center">
        {<GigJobBoard />}
      </div>
    </main>
  );
}
