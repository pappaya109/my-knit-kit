import * as styles from './Button.css';
interface ButtonType {
  type: 'accept' | 'cancel';
  text: string;
  className?: string;
}

const Button = ({ type, text, className }: ButtonType) => {
  return <div className={`${styles[type]} ${className ?? ''}`}>{text}</div>;
};

export default Button;
