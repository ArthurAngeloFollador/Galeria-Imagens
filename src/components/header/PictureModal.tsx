import { PictureModalStyle } from '../../style'
import React, { type JSX } from "react";

interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

function PictureModal({ isOpen, children }: ModalProps): JSX.Element | null {

  if (!isOpen) {
    return null;
  }

    return (
        <PictureModalStyle>
            {children}
        </PictureModalStyle>
    )
}

export default PictureModal
