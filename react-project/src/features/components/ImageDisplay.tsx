import './ImageDisplay.css';

interface ImageDisplayProps {
    imageUrls: string[];
    onClear: () => void;
}

export const ImageDisplay = ({ imageUrls, onClear }: ImageDisplayProps): React.JSX.Element => {
  return (
    <div className="ImageDisplay">
      {imageUrls.length > 0 ? (
        <div className="ImageGrid">
          {imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`送信画像 ${index + 1}`} className="Thumbnail" />
          ))}
          <button className="ClearButton" onClick={onClear}>すべてクリア</button>
        </div>
      ) : (
        <p>送信された画像はまだありません。</p>
      )}
    </div>
  );
};