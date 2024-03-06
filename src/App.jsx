import { useEffect, useRef, useState } from 'react';
import ResizeVertical from './components/ResizeVertical.jsx';
import ResizeHorizontal from './components/ResizeHorizontal.jsx';
import TabWindow from './components/TabWindow.jsx';

function App() {
  const [data, setData] = useState([{type: "tree", child: []}])
  const [dataItems, setDataItems] = useState(1)
  const divRef = useRef(null);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const handleSplit = (clickType, ind) => {
    if(clickType === "vertical") {
      let tmp = [...data]
      tmp = [...data, {type: "tree", child: []}]
      setData(tmp)
      setDataItems(tmp.length)
    } else {
      let tmp = [...data]
      tmp[ind]["child"].push({type: "tree"})
      setData(tmp)
      setDataItems(tmp.length)
    }
  }

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.getBoundingClientRect().width;
      const height = divRef.current.getBoundingClientRect().height;
      setWidth(width);
      setHeight(height);
    }
  }, [])

  return (
    <div className="app" ref={divRef}>
      <div className='tabWrapper'>
        {(width && height) && data.map((tab, i) => (          
          (tab.child && tab.child.length == 0) ?
            <ResizeHorizontal key={i} parentWt={width/dataItems}>
              <TabWindow handleSplit={handleSplit} tabWindow={tab} ind={i} />
            </ResizeHorizontal> :             
            <ResizeHorizontal key={i} parentWt={width/dataItems}>
              {tab.child.map((item, index) => 
                <ResizeVertical key={index} parentHt={height/dataItems}>
                  <TabWindow handleSplit={handleSplit} tabWindow={tab} ind={i} />
                </ResizeVertical>
              )}           
            </ResizeHorizontal>
        ))}
      </div>
    </div>
  )
}

export default App
