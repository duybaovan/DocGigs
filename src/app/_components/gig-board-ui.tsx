"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { LoginDialog, LoginDialogButton } from "./login-dialog";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import type { Gig, Location } from "@prisma/client";
import { Label } from "~/components/ui/label";

interface GigCardProps {
  gig: Gig & { location: Location };
}

export const GigCard: React.FC<GigCardProps> = ({ gig }) => (
  <Card className="mb-8 w-full">
    <CardHeader className="flex flex-row justify-between font-bold">
      <CardTitle>{gig.hospitalName}</CardTitle>${gig.hourlyPay} / hr
    </CardHeader>
    <CardContent>
      <CardDescription>{gig.hospitalDescription}</CardDescription>
      <div className="mt-4 flex flex-wrap gap-2">
        {gig.schedules && (
          <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
            {gig.schedules}
          </span>
        )}
        {gig.assignmentLength && (
          <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
            Assignment Length: {gig.assignmentLength}
          </span>
        )}
        {gig.specialty && (
          <span className="mr-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">
            Specialty: {gig.specialty}
          </span>
        )}
        {gig.ehrSoftwareUsed && (
          <span className="mr-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
            EHR Software: {gig.ehrSoftwareUsed}
          </span>
        )}
        {gig.payment && (
          <span className="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800">
            Payment: {gig.payment}
          </span>
        )}
        {gig.milesFromYou && (
          <span className="mr-2 rounded bg-pink-100 px-2.5 py-0.5 text-xs font-semibold text-pink-800">
            {gig.milesFromYou} miles from your location
          </span>
        )}
        {gig.hospitalSize && (
          <span className="mr-2 rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800">
            Hospital Size: {gig.hospitalSize} beds
          </span>
        )}
        {gig.hospitalCertification && (
          <span className="mr-2 rounded bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-800">
            {gig.hospitalCertification} hospital
          </span>
        )}
        {gig.hospitalStarRating && (
          <span className="mr-2 rounded bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
            Hospital Star Rating: {gig.hospitalStarRating}
          </span>
        )}
        {gig.malpracticeCoverage && (
          <span className="mr-2 rounded bg-lime-100 px-2.5 py-0.5 text-xs font-semibold text-lime-800">
            {gig.malpracticeCoverage
              ? "Malpractice Coverage Included"
              : "No Malpractice Coverage"}
          </span>
        )}
        {gig.shiftLength && (
          <span className="mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
            {gig.shiftLength}-hour shifts
          </span>
        )}
        {gig.minimumRequirements && (
          <span className="mr-2 rounded bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
            {gig.minimumRequirements.join(", ")} required
          </span>
        )}
        {gig.travel && (
          <span className="mr-2 rounded bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
            Travel {gig.travel}
          </span>
        )}
        {gig.reasonForLocumsNeed && (
          <span className="mr-2 rounded bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-800">
            {gig.reasonForLocumsNeed}
          </span>
        )}
      </div>
    </CardContent>
    <CardFooter className=" flex justify-between">
      <Label>
        {gig.location.city}, {gig.location.state}
      </Label>
      <Dialog>
        <DialogTrigger asChild>
          <Button>{"Sign Up"}</Button>
        </DialogTrigger>
        <DialogContent className="mx-auto sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-left">
              Saint Luke's Medical Center Confirmation
            </DialogTitle>
            <DialogDescription>
              {" "}
              13-weeks locums program with 8-hour shift
            </DialogDescription>
          </DialogHeader>

          <div className="text-left">
            <p>
              Dates: <strong>April 15, 2024 - June 30, 2024</strong>
            </p>
            <p>
              Pay: <strong>$7,000 per shift</strong>
            </p>
            <p>
              Service Fee (incl. malpractice coverage): <strong>$700</strong>
            </p>
            <p>
              Estimated travel and mileage: <strong>$500</strong>
            </p>
            <p>
              Take home pay:{" "}
              <strong className="text-green-600">$123,600</strong>
            </p>
            <Button className="mt-8"> Get started</Button>
          </div>
        </DialogContent>
      </Dialog>
    </CardFooter>
  </Card>
);

interface GigListProps {
  gigs: Array<Gig & { location: Location }>;
  isPartial?: boolean;
}

export const GigList: React.FC<GigListProps> = ({ gigs, isPartial }) => {
  const fadeRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger your function here
            console.log("Gradient fade is in view");
          }
        });
      },
      {
        root: null, // relative to the viewport
        threshold: 0.1, // trigger when 10% of the element is in view
      },
    );

    if (fadeRef.current) {
      observer.observe(fadeRef.current);
    }

    return () => {
      if (fadeRef.current) {
        observer.unobserve(fadeRef.current);
      }
    };
  }, []);

  return (
    <ScrollArea className="relative h-full w-full overflow-hidden">
      {gigs.map((gig, index) => (
        <GigCard key={gig.id + index} gig={gig} />
      ))}

      {isPartial && (
        <>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="absolute bottom-16 left-0 right-0 z-30 mx-auto w-36"
                variant="default"
              >
                {"Sign Up"}
              </Button>
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
          <div ref={fadeRef} className="gradient-fade" />
        </>
      )}
    </ScrollArea>
  );
};
