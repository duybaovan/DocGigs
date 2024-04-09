"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/components/ui/card";

import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam";
import { Dashboard } from "@uppy/react";
import RemoteSources from "@uppy/remote-sources";
import Transloadit from "@uppy/transloadit";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import VerificationSteps from "../../_components/verification-steps";
import type { VerificationStep } from "../../_components/verification-steps";
import { Label } from "~/components/ui/label";

const DocUploadPage: React.FC = () => {
  const [demoStep, setDemoStep] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);

  const stepsData: VerificationStep[] = [
    { label: "Verify medical credential", status: "pending" },
    {
      label: "Cross-check educational records",
      status: "pending",
    },
    { label: "Verify malpractice document", status: "pending" },
    { label: "Validate resume", status: "pending" },
    { label: "Check all Expiry Dates", status: "pending" },
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (open) {
      timeout = setTimeout(() => {
        setVerificationComplete(true);
      }, 750 * 6); // 6 steps including the initial loading indicator
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [open]);

  const requiredDocuments = [
    "Medical License with NPI",
    demoStep == 1 ? "State License (Expired)" : "State License",
    "Liability Insurance",
    "DEA License",
    "Medical School Diploma",
    "Immunization records",
    "Resume",
  ];
  const uppy = new Uppy()
    .use(Webcam)
    .use(RemoteSources, {
      companionUrl: "https://your-companion-url",
      sources: ["Box", "Dropbox", "GoogleDrive", "OneDrive", "Url"],
    })
    .use(Transloadit, {
      assemblyOptions: {
        params: {
          auth: { key: "3595d13af39b485b9ab798860b003df1" },
          template_id: "9782abb40a274c3fa8862439dd2d101c",
        },
      },
    });

  const providerData = {
    image: "/path-to-provider-image.jpg", // You should replace this with the actual path to the provider's image
    name: "Lilly Potter",
    status: "Verified",
    npi: {
      number: "9773825610",
      name: "Lilly James Potter",
      status: "Active",
    },
    dea: {
      number: "AB1334164",
      licenseType: "C-Practitioner",
      expiration: "03/10/23",
    },
    stateLicenses: [
      {
        state: "CA",
        licenseType: "Physician",
        licenseNumber: "A121295",
        expiration: "11/12/22",
      },
      {
        state: "WA",
        licenseType: "Physician",
        licenseNumber: "019923",
        expiration: "07/03/23",
      },
    ],
    liabilityInsurance: {
      carrier: "Acme Insurance",
      policyNumber: "18718124124",
      expiration: "03/10/23",
    },
  };

  uppy.on("complete", (result) => {
    console.log(result.successful);
    if (result.successful) {
      setOpen(true);
      setDemoStep(demoStep + 1);
    }
  });

  return (
    <main>
      <Card className="mx-auto max-w-xl px-12 shadow">
        <CardHeader>
          <CardTitle className="text-xl">
            Complete Locum Tenes Credentialing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {requiredDocuments.map((document, index) => (
              <li key={index}>
                {verificationComplete ? (
                  <span
                    className={
                      demoStep > 1 ||
                      (demoStep === 1 && document !== "State License (Expired)")
                        ? "text-green-700"
                        : "text-red-700"
                    }
                  >
                    {demoStep > 1 ||
                    (demoStep === 1 && document !== "State License (Expired)")
                      ? "✔ "
                      : "✘ "}
                  </span>
                ) : (
                  <span className={"text-yellow-500"}>○</span>
                )}
                <Label>{"  " + document}</Label>
              </li>
            ))}
          </ul>

          {demoStep != 2 && (
            <Dashboard
              height={300}
              className="mt-8"
              uppy={uppy}
              plugins={["Webcam"]}
            />
          )}
        </CardContent>
        {demoStep == 2 && (
          <CardFooter>
            <Link
              className={buttonVariants({ variant: "default" })}
              href="/doc_form_filled"
            >
              {" "}
              Continue{" "}
            </Link>
          </CardFooter>
        )}
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="mx-auto sm:max-w-[425px]">
          {!verificationComplete ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-center">
                  AI Credentialing In Progress
                </DialogTitle>
              </DialogHeader>
              <VerificationSteps initialStepsData={stepsData} />
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-center">
                  {demoStep === 1
                    ? "Expired State License Detected"
                    : "Success"}
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-center">
                {demoStep === 1
                  ? "The state license uploaded is expired. Please upload a valid state license."
                  : "Congratulations. All your documents have been processed successfully."}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default DocUploadPage;
