"use client";
import { PartialGigJobBoard } from "../_components/gig-job-board";
import { LoginDialogButton } from "../_components/login-dialog";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="pb-8 pt-16 text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          Stay at home shifts
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Join a community of over <span className="font-semibold">50,000</span>{" "}
          physicans finding work that suits their lifestyle. <br />
        </p>
        <div className="mt-8">
          <LoginDialogButton buttonTitle={"Get Started"} />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <PartialGigJobBoard />
      </div>
    </main>
  );
}
