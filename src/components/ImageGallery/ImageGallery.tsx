import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

import { Image } from "../../types/types";

type Props = {
  images: Image[];
  onOpen: (image: Image) => void;
};

const ImageGallery: React.FC<Props> = ({ images, onOpen }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onOpen={() => onOpen(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
