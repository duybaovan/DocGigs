import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import LoginDialog from "./_components/login-dialog";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 pt-16">
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className={cn(
          "absolute right-4 top-4",
          buttonVariants({ variant: "outline" }),
        )}
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
      <div className="container mt-4 flex flex-row items-center justify-center">
        {session && <GigJobBoard />}
      </div>
    </main>
  );
}

async function GigJobBoard() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestGigs = await api.gig.getPublicGigs();
  return (
    <ScrollArea className="h-full w-full">
      {latestGigs.map((gig, index) => (
        <Card key={index} className="mb-8 w-full">
          <CardHeader className="flex flex-row justify-between font-bold">
            <CardTitle>{gig.companyName}</CardTitle>${gig.hourlyPay} / hr
          </CardHeader>
          <CardContent>
            {" "}
            <CardDescription>{gig.description}</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between">
            {gig.location.city}, {gig.location.state}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Apply</Button>
              </DialogTrigger>
              <DialogContent className="mx-auto sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-center">Sign In</DialogTitle>
                  <DialogDescription className="mx-auto text-center">
                    to start earning money
                  </DialogDescription>
                </DialogHeader>
                <LoginDialog />
              </DialogContent>{" "}
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </ScrollArea>
  );
}
