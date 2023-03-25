import { PopupWithForm } from "./PopupWithForm";
export const InfoTooltip = ({isOpen, onClose, text, img}) => {

  return(
    <div className={`popup  ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content popup_type_infotooltip">
        <button type="button" onClick={onClose} className="popup__close" />
        <img className="popup__info-image" src={img} alt="descr"></img> 
        <h2 className="popup__header popup_type_infotooltip_header">{text}</h2>
      </div>
    </div>
  );
}