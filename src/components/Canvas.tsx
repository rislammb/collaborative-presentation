import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const drawRect = () => {
    const rect = new fabric.Rect({
      left: 20,
      top: 20,
      width: 100,
      height: 100,
      fill: "green",
    });
    canvas?.add(rect);
  };

  const drawCircle = () => {
    const circle = new fabric.Circle({
      left: 130,
      top: 20,
      radius: 50,
      fill: "blue",
    });
    canvas?.add(circle);
  };

  const drawLine = () => {
    const line = new fabric.Line([250, 70, 400, 70], {
      stroke: "dodgerblue",
      strokeWidth: 3,
    });
    canvas?.add(line);
  };

  const drawText = () => {
    const text = new fabric.FabricText("Hello world!", {
      left: 20,
      top: 130,
      fill: "lightgreen",
      fontSize: 32,
    });
    canvas?.add(text);
  };

  useEffect(() => {
    const currentCanvas = canvasRef.current;
    if (!currentCanvas) {
      return;
    }

    const c = new fabric.Canvas(currentCanvas);
    setCanvas(c);

    return () => {
      c?.dispose();
    };
  }, []);

  return (
    <div className="p-4">
      <div className="flex gap-2">
        <button className="btn btn-sm" onClick={drawRect}>
          Draw Rect
        </button>
        <button className="btn btn-sm" onClick={drawCircle}>
          Draw Circle
        </button>
        <button className="btn btn-sm" onClick={drawLine}>
          Draw Line
        </button>
        <button className="btn btn-sm" onClick={drawText}>
          Draw Text
        </button>
      </div>
      <canvas ref={canvasRef} width={1100} height={570} />
    </div>
  );
}
