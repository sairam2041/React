import { useEffect, useState } from "react";
import { FileUploader } from "./FileUploader";
import { ImageDisplay } from "./ImageDisplay";
import './ImageUploadPage.css';

export const ImageUploadPage = (): React.JSX.Element => {
  const [submittedFile, setSubmittedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Fileが更新されたらURLを生成し、前のURLを破棄
  useEffect(() => {
    if (!submittedFile) {
      setImageUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(submittedFile);
    setImageUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [submittedFile]);

  const handleSubmit = (file: File | null) => {
    setSubmittedFile(file);
  };

  return (
    <div className="ImageUploadPage">
      <ImageDisplay imageUrl={imageUrl} />
      <FileUploader onSubmit={handleSubmit} />
    </div>
  );
};
