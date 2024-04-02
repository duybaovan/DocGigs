"use client";
import React, { useState } from "react";
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

const DocUploadPage: React.FC = () => {
  const [demoStep, setDemoStep] = useState<number>(0);
  const [open, setOpen] = useState(false);

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
                <span
                  className={
                    demoStep > 1 ||
                    (demoStep === 1 && document !== "State License (Expired)")
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {demoStep > 1 ||
                  (demoStep === 1 && document !== "State License (Expired)")
                    ? "✔"
                    : "✘"}
                </span>
                {"  " + document}
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
          <DialogHeader>
            <DialogTitle className="text-center">
              {" "}
              {demoStep == 1 ? "Expired State License Detected" : "Success"}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center">
            {demoStep == 1
              ? `The state license uploaded is expired. Please upload a valid state
            license.`
              : "Congratulations. All your documents have been processed successfully."}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default DocUploadPage;