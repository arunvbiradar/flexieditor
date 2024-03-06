import React from 'react'

const TabContainer = ({tabs, activeTab, tabType}) => {
  return (
    <div className="tabContainer">
      {tabs.map((tab, index) => (
        <div key={index} className={`tabContent ${activeTab === index ? "active" : ''}`}>
          {tab.title} - {tabType}
        </div>
      ))}
    </div>
  )
}

export default TabContainer
