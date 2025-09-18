import './ImageDisplay.css';

interface ImageDisplayProps {
    imageUrl: string | null;
    onClear: () => void;
}

export const ImageDisplay = ({ imageUrl, onClear }: ImageDisplayProps): React.JSX.Element => {
    return (
        <div className='ImageDisplay'>
            {imageUrl ? (
                <div className="ImageWrapper">
                    <img src={imageUrl} alt='送信された画像' />
                    <button className="ClearButton" onClick={onClear}>画像をクリア</button>
                </div>
            ) : (
                <p>送信された画像はまだありません。</p>
            )}
        </div>
    );
};