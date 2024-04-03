import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import mockDoctorData from "~/data/mock_doctor_1.json";

export default function DoctorSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Doctor Information</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Personal Identifying Information */}
        <div className="mb-2">
          <strong className="text-gray-600">Full Name:</strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.PersonalIdentifyingInformation.FullName}
          </span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-600">Social Security Number:</strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.PersonalIdentifyingInformation.SocialSecurityNumber}
          </span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-600">Date Of Birth:</strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.PersonalIdentifyingInformation.DateOfBirth}
          </span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-600">
            Medicare Identification Number:
          </strong>{" "}
          <span className="text-gray-800">
            {
              mockDoctorData.PersonalIdentifyingInformation
                .MedicareIdentificationNumber
            }
          </span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-600">
            National Provider Identifier:
          </strong>{" "}
          <span className="text-gray-800">
            {
              mockDoctorData.PersonalIdentifyingInformation
                .NationalProviderIdentifier
            }
          </span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-600">Former Or Maiden Name:</strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.PersonalIdentifyingInformation.FormerOrMaidenName}
          </span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-600">
            Other Names Used Professionally:
          </strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.PersonalIdentifyingInformation.OtherNamesUsedProfessionally.join(
              ", ",
            )}
          </span>
        </div>
        {/* License Certification Registration Information */}
        <div className="mb-2">
          <strong className="text-gray-600">Active License Number:</strong>{" "}
          <span className="text-gray-800">
            {
              mockDoctorData.LicenseCertificationRegistrationInformation
                .ActiveLicense.Number
            }
          </span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-600">
            Active License Effective Date:
          </strong>{" "}
          <span className="text-gray-800">
            {
              mockDoctorData.LicenseCertificationRegistrationInformation
                .ActiveLicense.EffectiveDate
            }
          </span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-600">State Where Issued:</strong>{" "}
          <span className="text-gray-800">
            {
              mockDoctorData.LicenseCertificationRegistrationInformation
                .ActiveLicense.StateWhereIssued
            }
          </span>
        </div>
        {/* ... Add all other fields in a similar fashion ... */}
        {/* Business Information */}
        <div className="mb-2">
          <strong className="text-gray-600">Business Name:</strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.BusinessInformation.BusinessName}
          </span>
        </div>
        {/* ... Add all other fields in a similar fashion ... */}
        {/* Patient Information */}
        <div className="mb-2">
          <strong className="text-gray-600">Accepting New Patients:</strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.PatientInformation.AcceptingNewPatients}
          </span>
        </div>
        {/* ... Add all other fields in a similar fashion ... */}
        {/* Specialty Type Information */}
        <div className="mb-2">
          <strong className="text-gray-600">Primary Specialty:</strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.SpecialtyTypeInformation.PrimarySpecialtyType}
          </span>
        </div>
        {/* Supporting Documentation */}
        <div className="mb-2">
          <strong className="text-gray-600">
            Required Documents Section 12:
          </strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.SupportingDocumentation.RequiredDocumentsSection12.join(
              ", ",
            )}
          </span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-600">
            Additional Documents Requested:
          </strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.SupportingDocumentation.AdditionalDocumentsRequested.join(
              ", ",
            )}
          </span>
        </div>
        {/* Supporting Documentation */}
        <div className="mb-2">
          <strong className="text-gray-600">
            Required Documents Section 12:
          </strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.SupportingDocumentation.RequiredDocumentsSection12.join(
              ", ",
            )}
          </span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-600">
            Additional Documents Requested:
          </strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.SupportingDocumentation.AdditionalDocumentsRequested.join(
              ", ",
            )}
          </span>
        </div>

        {/* Other Information */}
        <div className="mb-2">
          <strong className="text-gray-600">
            Changes To Medicare Enrollment:
          </strong>{" "}
          <span className="text-gray-800">
            {mockDoctorData.OtherInformation.ChangesToMedicareEnrollment}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
