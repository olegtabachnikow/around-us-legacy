export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    open() {
        this._popup.classList.add('popup_visible');
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
    }
    close() {
        this._popup.classList.remove('popup_visible');
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose.bind(evt);
        });
    }
    setEventListeners() {
        this._popup.addEventListener("mousedown", (evt) => {
            if (evt.target.classList.contains('popup_visible') || evt.target.classList.contains('popup__close-button-icon')) {
                this.close();
            }
        });
    }
}