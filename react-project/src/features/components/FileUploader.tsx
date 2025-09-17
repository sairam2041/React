import { useRef, useState } from "react";
import './FileUploader.css';

export const FileUploader = (): React.JSX.Element => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if(selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleResetPreview = () => {
    if(previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
      setFile(null);

      // ファイル名の表示を消す
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  }

  return (
    <div className="FileUploader">
      <div className="App-form">
        <input name="file" type="file" accept="image/*" onChange={handleChange} ref={fileInputRef} />
        <input type="button" disabled={!file} value="送信" />
        {previewUrl && (
          <div className="ImagePreview">
            <img src={previewUrl} alt="プレビュー" />
            <button className="ResetButton" onClick={handleResetPreview}>初期化</button>
          </div>
         )}
      </div>
    </div>
  );
};
