"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PartialGigJobBoard } from "../_components/gig-job-board";
import { Button } from "~/components/ui/button";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/jobs");
    }
  }, [status, router]);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="pb-8 pt-16 text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          Find Your Ideal DocGig
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Join a community of over <span className="font-semibold">50,000</span>{" "}
          physicans finding work that suits their lifestyle. <br />
          Doctors on DocGig earned over{" "}
          <span className="font-semibold">$20,000</span> last year from home
        </p>
        <div className="mt-8">
          <Button className="mr-8">Get Started</Button>
          <Button>See Jobs</Button>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <PartialGigJobBoard />
      </div>
    </main>
  );
}
