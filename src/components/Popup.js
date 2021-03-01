import React from "react";
import ReactDOM from "react-dom";
import "./Popup.css";
import { Link } from "react-router-dom";

function Popup({ open, removeData, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="add_overlay">
        <div className="pop_up_container">
          <div className="pop_up_message">Are you sure?</div>
          <div className="pop_up_button_container">
            <Link className="home_link" to="/">
              <button
                className="pop_up_button"
                onClick={() => {
                  removeData();
                  onClose();
                }}
              >
                Yes
              </button>
            </Link>
            <button className="pop_up_button" onClick={onClose}>
              Maybe Not
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );

}

export default Popup;
