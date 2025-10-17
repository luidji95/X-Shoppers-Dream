import { useRef, useState } from "react";
import { tabData } from "../../../data/tabData";
import TabContent from "./TabContent";
import "./Operations.css";
import Button from "../../../components/ui/Button";
import { useIntersectionObserver } from "../../../useIntersectionObserver";

const Operations = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const operationRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(operationRef);

  return (
    <div className="operations-main borderbottom slide-init" ref={operationRef}>
      <div className="operations-text">
        <h2>Operations</h2>
        <p>Where simplicity meets efficiency to bring your home to life.</p>
      </div>

      <div
        className="tabButton-div"
        role="tablist"
        aria-label="Operations tabs"
      >
        {tabData.map((button) => (
          <Button
            key={button.id}
            onClick={() => setActiveTab(button.id)}
            variant="tab"
            className={activeTab === button.id ? "activetab" : ""}
            role="tab"
            aria-selected={activeTab === button.id}
            aria-controls={`panel-${button.id}`}
            id={`tab-${button.id}`}
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
              // poveži sa ARIA attrs
              id={`panel-${item.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${item.id}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Operations;
