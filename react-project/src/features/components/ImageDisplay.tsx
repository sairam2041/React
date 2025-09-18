import { useRef, useEffect } from 'react';
import './ImageDisplay.css';

interface ImageDisplayProps {
    imageUrls: string[];
    onClear: () => void;
}

export const ImageDisplay = ({ imageUrls, onClear }: ImageDisplayProps): React.JSX.Element => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const windowHeight = window.innerHeight;
        const threshold = windowHeight / 3;

        const container = containerRef.current;
        if (!container) return;

        const images = container.querySelectorAll("img");

        images.forEach(img => {
            img.onload = () => {
                const naturalHeight = img.naturalHeight;
                const naturalWidth = img.naturalWidth;

                if (naturalHeight > threshold) {
                    const scale = threshold / naturalHeight;
                    img.style.height = `${threshold}px`;
                    img.style.width = `${naturalWidth * scale}px`;
                } else {
                    img.style.height = `${naturalHeight}px`;
                    img.style.width = `${naturalWidth}px`;
                }
            };
        });
    }, [imageUrls]);

  return (
    <div className="ImageDisplay">
      {imageUrls.length > 0 ? (
        <div className="ImageGrid" ref={containerRef}>
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