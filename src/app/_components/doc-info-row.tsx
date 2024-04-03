import React from "react";
import { Label } from "@radix-ui/react-dropdown-menu";

type DocInfoRowProps = {
  headers: string[];
  values: string[];
  statusCheck?: {
    statusKey: string;
    positiveText: string;
    negativeText: string;
  };
};

const DocInfoRow: React.FC<DocInfoRowProps> = ({
  headers,
  values,
  statusCheck,
}) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))`,
  };

  return (
    <div
      className="mb-4 grid gap-4 rounded-md bg-gray-100 p-4"
      style={gridStyle}
    >
      {headers.map((header, index) => (
        <div key={index}>
          <Label className="text-xs font-bold text-gray-600">{header}</Label>
          <span
            className={`text-sm ${
              statusCheck && header === statusCheck.statusKey
                ? values[index] === "Verified"
                  ? "text-green-700"
                  : "text-red-700"
                : "text-gray-900"
            }`}
          >
            {statusCheck && header === statusCheck.statusKey
              ? values[index] === "Verified"
                ? statusCheck.positiveText
                : statusCheck.negativeText
              : values[index]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DocInfoRow;
