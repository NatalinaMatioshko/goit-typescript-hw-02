import Modal from "react-modal";
import css from "./ImageModal.module.css";

import { Image } from "../../types/types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
};

Modal.setAppElement("#root");

const ImageModal: React.FC<Props> = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(61, 61, 61, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          border: "none",
          padding: "0",
          maxWidth: "900px",
          margin: "auto",
          inset: "auto",
          borderRadius: "0",
          backgroundColor: "transparent",
        },
      }}
    >
      {image && (
        <div className={css.content}>
          <img
            className={css.img}
            src={image.urls.regular}
            alt={image.description || "Image"}
            style={{ width: "100%", height: "auto" }}
          />
          <div className={css.description}>
            <p className={css.text}>Likes: {image.likes}</p>
            <p className={css.text}>Author: {image.user.name}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
