import React, { type JSX } from "react";
import { ModalStyle } from "./modal.style.tsx";

interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

// const MODAL_STYLE: React.CSSProperties = {
//   position: "fixed",
//   top: "8px",
//   right: "133px",
//   border: "none",
//   borderRadius: "20px",
//   height: "450px",
//   width: "315px",
//   color: "#fff",
//   padding: "20px",
//   backgroundColor: "#1a1a1a",
// };

const NOTIFICATION_STYLE: React.CSSProperties = {
  alignContent: "center",
  left: "50% !important",
  height: "35px",
  borderBottom: "1px solid #fff",
  fontSize: "18px",
};

const CONTENT_STYLE: React.CSSProperties = {
  justifyContent: "center",
  height: "350px",
  display: "flex",
  alignItems: "center",
  fontSize: "18px",
};

function Modal({ isOpen, children }: ModalProps): JSX.Element | null {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalStyle>
      <div style={NOTIFICATION_STYLE}>
        <p>Notifications</p>
      </div>
      <div style={CONTENT_STYLE}>{children}</div>
    </ModalStyle>
  );
}

export default Modal;
