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

interface GigCardProps {
  gig: {
    companyName: string;
    hourlyPay: number;
    description: string;
    location: {
      city: string;
      state: string;
    };
  };
}

export const GigCard: React.FC<GigCardProps> = ({ gig }) => (
  <Card className="mb-8 w-full">
    <CardHeader className="flex flex-row justify-between font-bold">
      <CardTitle>{gig.companyName}</CardTitle>${gig.hourlyPay} / hr
    </CardHeader>
    <CardContent>
      <CardDescription>{gig.description}</CardDescription>
    </CardContent>
    <CardFooter className="flex justify-between">
      {gig.location.city}, {gig.location.state}
      <LoginDialogButton buttonTitle={"Apply"} />
    </CardFooter>
  </Card>
);

interface GigListProps {
  gigs: Array<{
    companyName: string;
    hourlyPay: number;
    description: string;
    location: {
      city: string;
      state: string;
    };
  }>;
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
        <Card key={index} className="mb-8 w-full">
          <CardHeader className="flex flex-row justify-between font-bold">
            <CardTitle>{gig.companyName}</CardTitle>${gig.hourlyPay} / hr
          </CardHeader>
          <CardContent>
            <CardDescription>{gig.description}</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between">
            {gig.location.city}, {gig.location.state}
            <LoginDialogButton buttonTitle={"Apply"} />
          </CardFooter>
        </Card>
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
