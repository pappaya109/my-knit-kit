import * as styles from './Landing.css';
import labelImage from '../../assets/braid.svg';
import Button from '../../components/Button';
import StarIcon from './StarIcon';
const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src={labelImage} className={styles.ribbon} />
        <div className={styles.iconArea}>
          <img src={'/icon.svg'} className={styles.iconImage} />
          {/* <StarIcon /> */}
        </div>
        <Button text='시작하기' type='cancel' className={styles.button} />
      </div>
    </div>
  );
};

export default Landing;
