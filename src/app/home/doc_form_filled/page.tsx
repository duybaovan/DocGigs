"use client";
import React, { useState } from "react";
import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam";
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
import ProviderCard from "../../_components/demo-license";

const DocUploadPage: React.FC = () => {
  const [demoStep, setDemoStep] = useState<number>(0);
  const [open, setOpen] = useState(false);

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

  const providerData = {
    image: "/path-to-provider-image.jpg",
    name: "Dr. William J. Chong",
    status: "Verified",
    npi: {
      number: "9773825610",
      name: "William J. Chong",
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
    education: {
      undergraduate: {
        schoolName: "University of California, Berkeley",
        degreeEarned: "B.Sc. in Biochemistry",
        address: "110 Sproul Hall, Berkeley, CA 94720, USA",
        phoneNumber: "+1 510-642-6000",
        graduationDate: "05/15/2010",
        verified: true,
      },
      medSchool: {
        schoolName: "Harvard Medical School",
        degreeEarned: "MD",
        address: "25 Shattuck St, Boston, MA 02115, USA",
        phoneNumber: "+1 617-432-1000",
        graduationDate: "05/15/2014",
        verified: true,
      },
    },
    residency: {
      programName: "Massachusetts General Hospital Residency",
      specialty: "Internal Medicine",
      address: "55 Fruit St, Boston, MA 02114, USA",
      phoneNumber: "+1 617-726-2000",
      startDate: "06/01/2014",
      endDate: "06/01/2017",
      verified: true,
    },
    fellowship: {
      programName: "Johns Hopkins Hospital Fellowship",
      specialty: "Cardiology",
      address: "1800 Orleans St, Baltimore, MD 21287, USA",
      phoneNumber: "+1 410-955-5000",
      startDate: "07/01/2017",
      endDate: "07/01/2018",
      verified: true,
    },
    personalData: {
      ssn: "123-45-6789",
      itin: "987654321",
      birthDate: "07/31/1980",
      residencyStatus: "Permanent Resident",
    },
    references: [
      {
        name: "Dr. Elizabeth Blackwell",
        hospital: "New York-Presbyterian Hospital",
        phoneNumber: "+1 212-305-2500",
        emailAddress: "e.blackwell@nyphospital.org",
        fax: "+1 212-305-2501",
      },
      {
        name: "Dr. Charles R. Drew",
        hospital: "UCLA Medical Center",
        phoneNumber: "+1 310-825-9111",
        emailAddress: "c.drew@uclamedcenter.org",
        fax: "+1 310-825-9112",
      },
    ],
    specialtyCertifications: [
      {
        certificationName: "Board Certified in Internal Medicine",
        issuingBody: "American Board of Internal Medicine",
        dateEarned: "08/15/2015",
        expirationDate: "08/15/2025",
      },
    ],
    workExperience: [
      {
        name: "Cedars-Sinai Medical Center",
        description: "Attending Physician",
        duration: "09/2018 - Present",
      },
      {
        name: "Boston Children's Hospital",
        description: "Pediatric Residency",
        duration: "08/2016 - 08/2018",
      },
    ],
  };

  return (
    <main>
      <ProviderCard provider={providerData} />
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
