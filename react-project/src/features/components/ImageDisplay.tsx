// import './ImageDisplay.css';

interface ImageDisplayProps {
    imageUrl: string | null;
}

export const ImageDisplay = ({ imageUrl }: ImageDisplayProps): React.JSX.Element => {
    return (
        <div className='ImageDisplay'>
            {imageUrl ? (
                <img src={imageUrl} alt='送信された画像' />
            ) : (
                <p>送信された画像はまだありません。</p>
            )}
        </div>
    );
};