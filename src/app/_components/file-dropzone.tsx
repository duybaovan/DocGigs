import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface FileDropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
  multiple?: boolean;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({
  onDrop,
  multiple = true,
}) => {
  const onDropCallback = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCallback,
    multiple,
  });

  return (
    <div
      {...getRootProps()}
      className="cursor-pointer border-2 border-dashed border-gray-300 p-6 text-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag n drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default FileDropzone;
