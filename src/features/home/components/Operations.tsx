import TabButton from "../../../TabContent/content";
import { tabData } from "../../../data/tabData";
import { useRef, useState } from "react";
import TabContent from "./TabContent";
import "./operations.css";
import Button from "../../../components/ui/Button";
const Operations = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="operations-main borderbottom" ref={sectionRef}>
      <div className="operations-text">
        <h2>Operations</h2>
        <p> Where simplicity meets efficiency to bring your home to life.</p>
      </div>
      <div className="tabButton-div">
        {tabData.map((button) => (
          <Button
            key={button.id}
            onClick={() => setActiveTab(button.id)}
            variant="tab"
            className={activeTab === button.id ? "activetab" : ""}
          >
            {button.buttonTitle}
          </Button>
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
