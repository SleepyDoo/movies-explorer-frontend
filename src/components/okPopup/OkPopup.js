import "./OkPopup.css";

const OkPopup = (props) => {
    return (
        <div className={`ok-popup ${props.isOpen ? "ok-popup_opened" : ""}`}>
            <div className="ok-popup__container">
                <div className="ok-popup__sym" />
                <p className="ok-popup__error">Данные успешно изменены</p>
                <button type="button" className="error-popup__close-button" onClick={props.onClose}>OK</button>
            </div>
        </div>
    )
};

export default OkPopup;