import { useState } from "react";
import { FileUploader } from "./FileUploader";
import { ImageDisplay } from "./ImageDisplay";
import './ImageUploadPage.css';

export const ImageUploadPage = (): React.JSX.Element => {
  const [submittedImageUrl, setSubmittedImageUrl] = useState<string | null>(null);

  const handleSubmit = (imageUrl: string | null) => {
    setSubmittedImageUrl(imageUrl);
  };

  return (
    <div className="ImageUploadPage">
      <ImageDisplay imageUrl={submittedImageUrl} />
      <FileUploader onSubmit={handleSubmit} />
    </div>
  );
};
