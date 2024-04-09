import React, { useEffect, useState } from "react";
import { Label } from "~/components/ui/label";

export interface VerificationStep {
  label: string;
  status: "pending" | "verified" | "error";
  endState?: "pending" | "verified" | "error";
}

interface VerificationStepsProps {
  initialStepsData: VerificationStep[];
}

const VerificationSteps: React.FC<VerificationStepsProps> = ({
  initialStepsData,
}) => {
  const [steps, setSteps] = useState<VerificationStep[]>(initialStepsData);

  useEffect(() => {
    const timeouts = steps.map((step, index) =>
      setTimeout(
        () => {
          setSteps((prevSteps) =>
            prevSteps.map((prevStep, stepIndex) => {
              if (stepIndex === index) {
                // Check if forceStatus is provided, otherwise set to verified or error based on index
                const status =
                  step.endState ??
                  (stepIndex === steps.length - 1 ? "error" : "verified");
                return {
                  ...prevStep,
                  status: status,
                };
              }
              return prevStep;
            }),
          );
        },
        750 * (index + 1),
      ),
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div>
      {steps.map((step, index) => (
        <div key={index} className={`row ${step.status}`}>
          {step.status === "verified" && (
            <span className="text-green-700">✔</span>
          )}
          {step.status === "error" && <span className="text-red-700">✘</span>}
          <Label className="text-sm">{" " + step.label}</Label>
        </div>
      ))}
    </div>
  );
};

export default VerificationSteps;
