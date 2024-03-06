import { useState, useRef } from 'react';

const ResizeVertical = ({parentHt, children}) => {
  const [height, setHeight] = useState(parentHt);
  const [isResizing, setIsResizing] = useState(false);
  const startY = useRef(0);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    startY.current = e.clientY;
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const deltaY = e.clientY - startY.current;
      setHeight(height + deltaY);
      startY.current = e.clientY;
    }
  };

  return (
    <div
      className="resizeWrap vertical"
      style={{ height: `${height < 200 ? 200 : height}px`}}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <span className="verticalGrab" onMouseDown={handleMouseDown} />
      {children}
      <span className="verticalGrab" onMouseDown={handleMouseDown} />
    </div>
  );
};

export default ResizeVertical;
