import "./Operations.css";

export type Props = {
  title: string;
  text: string;
};

const TabContent = ({ title, text, img }: Props) => {
  return (
    <div className="tab-content">
      <div className="tab-icon-wrapper icon-circle">
        <img src={img} alt="icon" className="tab-icon" />
      </div>
      <div className="tab-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TabContent;
