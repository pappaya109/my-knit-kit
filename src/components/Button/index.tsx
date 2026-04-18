import { Link } from 'react-router';
import * as styles from './Button.css';

interface ButtonType {
  type: 'accept' | 'cancel';
  text: string;
  className?: string;
  to?: string;
}

const Button = ({ type, text, className, to }: ButtonType) => {
  const mergedClassName = `${styles.root} ${styles[type]} ${className ?? ''}`;

  if (to) {
    return (
      <Link to={to} className={mergedClassName}>
        <span className={styles.label}>{text}</span>
      </Link>
    );
  }

  return (
    <button type='button' className={mergedClassName}>
      <span className={styles.label}>{text}</span>
    </button>
  );
};

export default Button;
