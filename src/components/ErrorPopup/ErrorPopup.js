import "./ErrorPopup.css";

const ErrorPopup = (props) => {
    return (
        <div className={`error-popup ${props.isOpen ? "error-popup_opened" : ""}`}>
            <div className="error-popup__container">
                <div className="error-popup__sym" />
                <p className="error-popup__error">{props.error}</p>
                <button type="button" className="error-popup__close-button" onClick={props.onClose}>OK</button>
            </div>
        </div>
    )
};

export default ErrorPopup;