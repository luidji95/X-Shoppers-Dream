import TabButton from "../TabContent/content";
import { tabData } from "../Data/tabData";
import { useState } from "react";
import TabContent from "../TabContent/content";
import "./operations.css";
const Operations = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="operations-main">
      <div className="operations-text">
        <h2>Operations</h2>
        <p> Where simplicity meets efficiency to bring your home to life.</p>
      </div>
      <div className="tabButton-div">
        {tabData.map((button) => (
          <button
            className={activeTab === button.id ? "tab-btn activetab" : "tb-btn"}
            key={button.id}
            onClick={() => setActiveTab(button.id)}
          >
            {button.buttonTitle}
          </button>
        ))}
      </div>
      <div className="tabContent-div">
        {tabData
          .filter((tab) => tab.id === activeTab)
          .map((item) => (
            <TabContent
              key={item.id}
              title={item.title}
              text={item.text}
              img={item.img}
            />
          ))}
      </div>
    </div>
  );
};

export default Operations;
