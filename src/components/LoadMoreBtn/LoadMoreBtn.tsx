import css from "./LoadMoreBtn.module.css";

type Props = {
  onLoadMore: () => void;
};

const LoadMoreBtn: React.FC<Props> = ({ onLoadMore }) => {
  return (
    <button type="button" className={css.btn} onClick={onLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
