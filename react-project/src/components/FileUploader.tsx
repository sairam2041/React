import { useRef, useState } from "react";
import '../styles/file-uploader.css';

interface FileUploaderProps {
  onSubmit: (file: File | null) => void;
}

export const FileUploader = ({ onSubmit }: FileUploaderProps): React.JSX.Element => {
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
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  }

  const handleSubmit = () => {
    if (file) {
      onSubmit(file); // Fileオブジェクトを親に渡す
      handleResetPreview(); // 自分のプレビューは初期化
    }
  };

  return (
    <div className="FileUploader">
      <div className="App-form">
        <label
          htmlFor="fileUpload"
          className="customFileLabel"
          {...(file ? {title: `ファイル名：${file.name}`} : {})}
        >
          {file ? `ファイル名：${file.name}` : 'ファイルを選択してください'}
        </label>
        <input id="fileUpload" name="file" type="file" accept="image/*" onChange={handleChange} ref={fileInputRef} style={{ display: 'none'}} />
        <input type="button" disabled={!file} value="送信" onClick={handleSubmit}/>
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
