import css from "./ErrorMessage.module.css";

type Props = {
  error: string;
};

const ErrorMessage: React.FC<Props> = ({ error }) => (
  <p className={css.text}>{error}</p>
);

export default ErrorMessage;
