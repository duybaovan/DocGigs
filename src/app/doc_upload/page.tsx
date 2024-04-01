"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";

import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam";
import { Dashboard } from "@uppy/react";
import RemoteSources from "@uppy/remote-sources";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";

const requiredDocuments = [
  "Medical License with NPI",
  "State License",
  "Liability Insurance",
  "DEA License",
  "Medical School Diploma",
  "Immunization records",
  "Resume",
];

const DocUploadPage: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const uppy = new Uppy()
    .use(Webcam)
    .use(RemoteSources, { companionUrl: "https://your-companion-url" });

  const isFileUploaded = (documentName: string) => {
    // Determine if the file corresponding to the documentName has been uploaded
    // This is a simplified check based on file names
    return uploadedFiles.some((fileName) => fileName.includes(documentName));
  };

  return (
    <main>
      <Card className="mx-auto mt-12 max-w-xl p-12 shadow">
        <CardHeader>
          <CardTitle className="text-xl">Locum Tenes Credentialing</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {requiredDocuments.map((document, index) => (
              <li key={index}>
                <span
                  className={
                    isFileUploaded(document) ? "text-green-500" : "text-red-500"
                  }
                >
                  {isFileUploaded(document) ? "✔" : "✘"}
                </span>
                {" " + document}
              </li>
            ))}
          </ul>

          <Dashboard className="mt-8" uppy={uppy} plugins={["Webcam"]} />
        </CardContent>
      </Card>
    </main>
  );
};

export default DocUploadPage;
