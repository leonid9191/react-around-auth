import { PopupWithForm } from "./PopupWithForm";
export const InfoTooltip = ({isOpen, onClose}) => {

  return(
    <div className={`popup  ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content popup_type_infotooltip">
        <button type="button" onClick={onClose} className="popup__close" />
        <div className="popup__info-image" src="../images/wrong.png"></div> 
        <h2 className="popup__header popup_type_infotooltip_header">Oops, something went wrong! Please try again.</h2>
      </div>
    </div>
  );
}