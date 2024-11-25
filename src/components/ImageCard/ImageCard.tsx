import css from "./ImageCard.module.css";

import { Image } from "../../types/types";

type Props = {
  image: Image;
  onOpen: () => void;
};

const ImageCard: React.FC<Props> = ({ image, onOpen }) => {
  const { urls, description } = image;

  return (
    <div className={css.card} onClick={onOpen}>
      <img className={css.img} src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
