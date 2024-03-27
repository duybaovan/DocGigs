import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className="absolute right-4 top-4 rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
      <div className="container flex flex-row items-center justify-center gap-12 px-4 py-16 ">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            {session && <GigJobBoard />}
          </div>
        </div>
      </div>
    </main>
  );
}

async function GigJobBoard() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestGigs = await api.gig.getPublicGigs();
  return (
    <div className="w-full max-w-xs">
      <div>
        <h3 className="text-xl font-bold">Gigs for Doctors:</h3>
        <ul>
          {latestGigs.map((gig, index) => (
            <li key={index} className="truncate">
              {gig.companyName}
              {gig.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
