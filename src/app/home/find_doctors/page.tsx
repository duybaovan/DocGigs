"use client";
import React, { useEffect, useState } from "react";
import { DoctorList } from "~/app/_components/doctor-list";
import { PostShiftForm } from "~/app/_components/post-shift-form";
import VerificationSteps, {
  VerificationStep,
} from "~/app/_components/verification-steps";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

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

  const handlePostShiftFormButtonTap = () => {
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
        <DoctorList />
      ) : (
        <>
          <PostShiftForm postShiftTap={handlePostShiftFormButtonTap} />
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="mx-auto sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center">
                  Doctor Search in Progress
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
