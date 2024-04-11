import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import DocInfoRow from "./doc-info-row";
import { Button } from "~/components/ui/button";
// ProviderCard component with Tailwind CSS

export type Provider = {
  image: string;
  name: string;
  status: string;
  npi: {
    number: string;
    name: string;
    status: string;
  };
  dea: {
    number: string;
    licenseType: string;
    expiration: string;
  };
  stateLicenses: Array<{
    state: string;
    licenseType: string;
    licenseNumber: string;
    expiration: string;
  }>;
  liabilityInsurance: {
    carrier: string;
    policyNumber: string;
    expiration: string;
  };
  education: {
    undergraduate: {
      schoolName: string;
      degreeEarned: string;
      address: string;
      phoneNumber: string;
      graduationDate: string;
      verified: boolean;
    };
    medSchool: {
      schoolName: string;
      degreeEarned: string;
      address: string;
      phoneNumber: string;
      graduationDate: string;
      verified: boolean;
    };
  };
  residency: {
    programName: string;
    specialty: string;
    address: string;
    phoneNumber: string;
    startDate: string;
    endDate: string;
    verified: boolean;
  };
  fellowship: {
    programName: string;
    specialty: string;
    address: string;
    phoneNumber: string;
    startDate: string;
    endDate: string;
    verified: boolean;
  };
  personalData: {
    ssn: string;
    itin: string;
    birthDate: string;
    residencyStatus: string;
  };
  references: Array<{
    name: string;
    hospital: string;
    phoneNumber: string;
    emailAddress: string;
    fax: string;
  }>;
  specialtyCertifications: Array<{
    certificationName: string;
    issuingBody: string;
    dateEarned: string;
    expirationDate: string;
  }>;
  workExperience: Array<{
    name: string;
    description: string;
    duration: string;
  }>;
};

const ProviderCard: React.FC<{ provider: Provider }> = ({ provider }) => {
  return (
    <Card className="m-16 p-8">
      <CardHeader>
        <CardTitle className="flex justify-between text-lg">
          {provider.name}
          <div>
            <Button className="ml-auto mr-4">Save to PDF</Button>
            <Button className="ml-auto mr-4">Change Template</Button>

            <Button className="ml-auto mr-4">Edit Profile</Button>
            <Button className="ml-auto">Next</Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li>
            <span>✅ </span>
            <strong>Board Certification:</strong> Board-certified in internal
            medicine, indicating a high level of proficiency and expertise in
            his primary specialty.
          </li>
          <li>
            <span>✅ </span>
            <strong>Active Licenses and Insurance:</strong> Maintains active
            state medical licenses and DEA registration, along with current
            liability insurance, ensuring he meets basic regulatory and legal
            requirements for practice.
          </li>
          <li>
            <span>✅ </span>
            <strong>Work Experience:</strong> Ongoing role as an attending
            physician at Cedars-Sinai Medical Center showcases his capability
            and trustworthiness in a clinical setting, backed by years of
            relevant experience.
          </li>
        </ul>
        <ul>
          <li>
            <span>⚠️ </span>
            <strong>License and DEA Expirations:</strong> Several key
            credentials are either expired or nearing expiration, including his
            DEA license, California state license, and liability insurance.
            These require immediate renewal to maintain compliance and ensure
            uninterrupted practice.
          </li>
        </ul>
        <Label className="mb-2 mt-4 font-bold">NPI</Label>
        <DocInfoRow
          headers={["Number", "Name", "Status", "Verified"]}
          values={[
            provider.npi.number,
            provider.npi.name,
            "Active",
            "Verified",
          ]}
          statusCheck={{
            statusKey: "Verified",
            positiveText: "Yes",
            negativeText: "No",
          }}
        />

        <Label className="mb-2 font-bold">DEA</Label>
        <DocInfoRow
          headers={["Number", "License Type", "Expiration", "Verified"]}
          values={[
            provider.dea.number,
            provider.dea.licenseType,
            provider.dea.expiration,
            "Verified",
          ]}
          statusCheck={{
            statusKey: "Verified",
            positiveText: "Yes",
            negativeText: "No",
          }}
        />

        <Label className="mb-2 font-bold">State Licenses</Label>
        {provider.stateLicenses.map((license, index) => (
          <div key={index} className="mt-4">
            <DocInfoRow
              headers={[
                "State",
                "License type",
                "Number",
                "Expiration",
                "Verified",
              ]}
              values={[
                license.state,
                license.licenseType,
                license.licenseNumber,
                license.expiration,
                "Verified",
              ]}
              statusCheck={{
                statusKey: "Verified",
                positiveText: "Yes",
                negativeText: "No",
              }}
            />
          </div>
        ))}

        <Label className="mb-2 font-bold">Liability Insurance</Label>
        <div className="mt-4">
          <DocInfoRow
            headers={["Carrier", "Policy number", "Expiration", "Verified"]}
            values={[
              provider.liabilityInsurance.carrier,
              provider.liabilityInsurance.policyNumber,
              provider.liabilityInsurance.expiration,
              "Verified",
            ]}
            statusCheck={{
              statusKey: "Verified",
              positiveText: "Yes",
              negativeText: "No",
            }}
          />
        </div>
        <Label className="mb-2 font-bold">Education</Label>
        <div className="mt-4">
          <DocInfoRow
            headers={[
              "Undergraduate School",
              "Degree",
              "Graduation Date",
              "Verified",
            ]}
            values={[
              provider.education.undergraduate.schoolName,
              provider.education.undergraduate.degreeEarned,
              provider.education.undergraduate.graduationDate,
              "Verified",
            ]}
            statusCheck={{
              statusKey: "Verified",
              positiveText: "Yes",
              negativeText: "No",
            }}
          />
          <DocInfoRow
            headers={[
              "Medical School",
              "Degree",
              "Graduation Date",
              "Verified",
            ]}
            values={[
              provider.education.medSchool.schoolName,
              provider.education.medSchool.degreeEarned,
              provider.education.medSchool.graduationDate,
              "Verified",
            ]}
            statusCheck={{
              statusKey: "Verified",
              positiveText: "Yes",
              negativeText: "No",
            }}
          />
        </div>

        <Label className="mb-2 font-bold">Residency</Label>
        <div className="mt-4">
          <DocInfoRow
            headers={[
              "Program Name",
              "Specialty",
              "Start Date",
              "End Date",
              "Verified",
            ]}
            values={[
              provider.residency.programName,
              provider.residency.specialty,
              provider.residency.startDate,
              provider.residency.endDate,
              "Verified",
            ]}
            statusCheck={{
              statusKey: "Verified",
              positiveText: "Yes",
              negativeText: "No",
            }}
          />
        </div>

        <Label className="mb-2 font-bold">Fellowship</Label>
        <div className="mt-4">
          <DocInfoRow
            headers={[
              "Program Name",
              "Specialty",
              "Start Date",
              "End Date",
              "Verified",
            ]}
            values={[
              provider.fellowship.programName,
              provider.fellowship.specialty,
              provider.fellowship.startDate,
              provider.fellowship.endDate,
              "Verified",
            ]}
            statusCheck={{
              statusKey: "Verified",
              positiveText: "Yes",
              negativeText: "No",
            }}
          />
        </div>

        <Label className="mb-2 font-bold">Specialty Certifications</Label>
        {provider.specialtyCertifications.map((certification, index) => (
          <div key={index} className="mt-4">
            <DocInfoRow
              headers={[
                "Certification",
                "Issuing Body",
                "Date Earned",
                "Expiration Date",
                "Verified",
              ]}
              values={[
                certification.certificationName,
                certification.issuingBody,
                certification.dateEarned,
                certification.expirationDate,
                "Verified",
              ]}
              statusCheck={{
                statusKey: "Verified",
                positiveText: "Yes",
                negativeText: "No",
              }}
            />
          </div>
        ))}

        <Label className="mb-2 font-bold">Work Experience</Label>
        {provider.workExperience.map((work, index) => (
          <div key={index} className="mt-4">
            <DocInfoRow
              headers={["Employer", "Role", "Duration", "Verified"]}
              values={[work.name, work.description, work.duration, "No"]}
              statusCheck={{
                statusKey: "Verified",
                positiveText: "Yes",
                negativeText: "No",
              }}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProviderCard;
