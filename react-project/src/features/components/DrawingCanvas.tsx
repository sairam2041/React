import React, { useRef, useEffect, useState } from 'react';
import '../styles/DrawingCanvas.css';

const DrawingCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if(canvas) {
            canvas.width = 800;
            canvas.height = 600;
            const context = canvas.getContext('2d');
            if(context) {
                context.lineWidth = 2;
                context.strokeStyle = '#000';
                setCtx(context);
            }
        }
    }, []);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if(!ctx) return;
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing || !ctx) return;
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
    };

    const stopDrawing = () => {
        if (!ctx) return;
        ctx.closePath();
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (canvas && ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    };

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        className="drawing-canvas"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <button className="clear-button" onClick={clearCanvas}>
        線をすべて消す
      </button>
    </div>
  );
};

export default DrawingCanvas;