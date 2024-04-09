/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React, { useState } from "react";
import { Button, buttonVariants } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import VerificationSteps, { VerificationStep } from "../verification-steps";

const PdfUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [processedPdfUrl, setProcessedPdfUrl] = useState<string | null>(null);

  const stepsData: VerificationStep[] = [
    { label: "Analyze form layout", status: "pending" },
    {
      label: "Fetch required data",
      status: "pending",
    },
    {
      label: "Fill out text fields",
      status: "pending",
    },
    { label: "Fill out misc fields", status: "pending" },
    { label: "Generate new form", status: "pending", endState: "verified" },
  ];

  const replaceWithFilledOutPdf = () => {
    setLoading(true);
    setTimeout(
      () => {
        const filledOutPdfUrl = "/FILLED_OUT.pdf";
        setProcessedPdfUrl(filledOutPdfUrl);
        setLoading(false);
      },
      750 * stepsData.length + 1000,
    );
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    console.log(file);
    if (file) {
      setSelectedFile(file);
      setProcessedPdfUrl(null);
    }
  };

  const renderPdfPreview = () => {
    const fileUrl =
      processedPdfUrl ?? (selectedFile && URL.createObjectURL(selectedFile));
    if (fileUrl) {
      return (
        <iframe
          src={fileUrl}
          className="h-full w-full"
          title="PDF Preview"
        ></iframe>
      );
    }
    return loading ? <div>Loading...</div> : null;
  };

  return (
    <Card className="flex h-full w-full flex-col items-start p-4">
      <div className="w-full">
        <label
          htmlFor="pdf-upload"
          className={buttonVariants({ variant: "default" })}
        >
          Upload PDF
          <input
            id="pdf-upload"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="sr-only" // This class hides the input visually
          />
        </label>

        {selectedFile && (
          <Button
            className="ml-4"
            onClick={replaceWithFilledOutPdf}
            disabled={loading}
          >
            Fill PDF with Doctor Data
          </Button>
        )}
      </div>
      <div className="mt-4 h-full w-full rounded-md ">
        {loading ? (
          <div className="h-full ">
            <VerificationSteps initialStepsData={stepsData} />
          </div>
        ) : (
          <div className="h-full">
            <p className="mb-2 text-sm font-bold">
              {" "}
              {processedPdfUrl ? "Type: Form 855I (FILLED)" : ""}{" "}
            </p>
            {renderPdfPreview()}
          </div>
        )}
      </div>
    </Card>
  );
};

export default PdfUploader;
