import { useState, useRef } from 'react';

const ResizeHorizontal = ({parentWt, children}) => {
  const [parentWidth, setParentWidth] = useState(parentWt);
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;
    const deltaX = e.clientX - startX;
    setParentWidth((prevWidth) => prevWidth + deltaX);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  return (
    <div className='resizeWrap horizontal' style={{ width: `${parentWidth < 200 ? 200 : parentWidth}px` }} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <span className="horizontalGrab" onMouseDown={handleMouseDown} />
      {children}
      <span className="horizontalGrab" onMouseDown={handleMouseDown} />
    </div>
  );
};

export default ResizeHorizontal;
