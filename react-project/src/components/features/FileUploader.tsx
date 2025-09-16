import { useState } from "react";

export const FileUploader = (): React.JSX.Element => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  return (
    <div className="FileUploader">
      <div className="App-form">
        <input name="file" type="file" accept="image/*" onChange={handleChange} />
        <input type="button" disabled={!file} value="送信" />
      </div>
    </div>
  );
};
