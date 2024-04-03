import DoctorSummary from "../_components/credentialer_app/doctor-summary";
import PdfUploader from "../_components/credentialer_app/pdf-uploader";

export default async function CredentialerPage() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="container flex flex-row gap-12 overflow-auto px-12 ">
        <div className="flex-1 overflow-y-auto">
          <DoctorSummary />
        </div>
        <div className="flex-1 overflow-y-auto">
          <PdfUploader />
        </div>
      </div>
    </main>
  );
}
