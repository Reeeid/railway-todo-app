import { ChevronIcon } from "~/icons/ChevronIcon";
import "./BackButton.css";

const handleClick = () => {
  window.history.back();
};

export const BackButton = ({func = handleClick}) => {
  return (
    <button type="button" onClick={func} className="back_button">
      <ChevronIcon className="back_button__icon" />
      Back
    </button>
  );
};
