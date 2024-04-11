"use client";
import React, { useEffect, useState } from "react";
import { PSVVerifyForm } from "~/app/_components/primary-source-verif";
import VerificationSteps, {
  VerificationStep,
} from "~/app/_components/verification-steps";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";

const FindDoctorsPage: React.FC = () => {
  const [showDoctorsList, setShowDoctorsList] = useState(false);

  const [open, setOpen] = useState(false);

  const stepsData: VerificationStep[] = [
    { label: "Finding available doctors", status: "pending" },
    {
      label: "Verifying credentials",
      status: "pending",
    },
    { label: "Applying filters", status: "pending", endState: "verified" },
  ];

  const handleStartVerifyTap = () => {
    setOpen(true);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (open) {
      timeout = setTimeout(
        () => {
          setShowDoctorsList(true);
          setOpen(false);
        },
        750 * stepsData.length + 1000,
      );
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [open]);

  return (
    <main>
      {showDoctorsList ? (
        <Card className="mx-auto mt-12 max-w-lg p-12">
          <CardHeader>
            <CardTitle> CA State License Verified</CardTitle>
          </CardHeader>
          <Image
            src="/license_screenshot_demo.png"
            width={500}
            height={500}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
          <a
            href="https://search.dca.ca.gov/details/8002/A/103353/e1ee73b0adc42325273f0fe25182cd72"
            target="_blank"
            className="mt-6"
            rel="noopener noreferrer"
          >
            View License Details
          </a>
        </Card>
      ) : (
        <>
          <PSVVerifyForm startVerifyTap={handleStartVerifyTap} />
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="mx-auto sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center">
                  Primary Source Verification In Progress
                </DialogTitle>
              </DialogHeader>
              <VerificationSteps initialStepsData={stepsData} />
            </DialogContent>
          </Dialog>
        </>
      )}
    </main>
  );
};
export default FindDoctorsPage;
