import React, { useState } from 'react';

function DragDrop({ data }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setPosition({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const { offsetX, offsetY } = e.nativeEvent;
      setPosition({ x: offsetX, y: offsetY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between">
        {/* Your other content here */}
      </div>
      <img
        className="w-full h-auto"
        src={data?.images[0].url}
        alt=""
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      />
      <div
        className="absolute"
        style={{ top: position.y, left: position.x, transform: 'translate(-50%, -50%)' }}
      >
        FASTOR7
      </div>
    </div>
  );
}

export default DragDrop;
