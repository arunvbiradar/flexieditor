import { useState } from "react";

import TopBar from "./TopBar"
import TabContainer from "./TabContainer";

const TabWindow = ({handleSplit, tabWindow, ind}) => {
  const [tabs, setTabs] = useState([{ title: 'Tab 1' }]);
  const [activeTab, setActiveTab] = useState(0);

  const handleAddTab = () => {
    const newTabs = [...tabs, { title: `Tab ${tabs.length + 1}` }];
      setTabs(newTabs);
      setActiveTab(newTabs.length - 1);
  }

  const handleActiveTab = (index) => {
    setActiveTab(index);
  }

  return (
    <div className="tabWindow">
      <TopBar
        tabs={tabs}
        ind={ind}
        activeTab={activeTab}
        handleAddTab={handleAddTab}
        handleActiveTab={handleActiveTab}
        handleSplit={handleSplit} />
      <TabContainer tabs={tabs} activeTab={activeTab} tabType={tabWindow.type} />
    </div>
  )
}

export default TabWindow
