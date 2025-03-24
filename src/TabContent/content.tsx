import { Props } from "../types/tabTypeContent";

const TabContent = ({ title, text }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default TabContent;
