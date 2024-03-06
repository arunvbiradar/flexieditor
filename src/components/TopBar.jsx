const TopBar = ({tabs, activeTab, handleAddTab, handleActiveTab, handleSplit, ind}) => {

  return (
    <div className="topBar">
      <div className="tabs">
        {tabs.map((tab, i) => (
          <span key={i} className={`tabText ${activeTab === i ? "active" : ''}`} onClick={() => handleActiveTab(i)}>{tab.title}</span>
        ))}
      </div>
      <button className="addBtn" onClick={handleAddTab}>+</button>
      <button className="addBtn" onClick={() => handleSplit("horizontal", ind)} style={{fontSize: "12px"}}>SH</button>
      <button className="addBtn" onClick={() => handleSplit("vertical", ind)} style={{fontSize: "12px"}}>SV</button>
    </div>
  )
}

export default TopBar
