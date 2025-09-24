import { useEffect, useState } from "react";
import { FileUploader } from "./FileUploader";
import { ImageDisplay } from "./ImageDisplay";
import '../styles/image-upload-page.css';

export const ImageUploadPage = (): React.JSX.Element => {
  const [submittedFiles, setSubmittedFiles] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const urls = submittedFiles.map(file => URL.createObjectURL(file));
    setImageUrls(urls);

    return () => {
      urls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [submittedFiles]);

  const handleSubmit = (file: File | null) => {
    if(file) {
      setSubmittedFiles(prev => [...prev, file]);
    }
  };

  const handleClearImages = () => {
    setSubmittedFiles([]);
    setImageUrls([]);
  }

  return (
    <div className="ImageUploadPage">
      <ImageDisplay imageUrls={imageUrls} onClear={handleClearImages} />
      <FileUploader onSubmit={handleSubmit}/>
    </div>
  );
};
