import * as styles from './Landing.css';
import labelImage from '../../assets/braid.svg';
import Button from '../../components/Button';
import StarIcon from './StarIcon';

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src={labelImage} className={styles.ribbon} alt='' aria-hidden='true' />
        <div className={styles.iconArea}>
          <StarIcon className={styles.starTopLeftLarge} />
          <StarIcon className={styles.starTopLeftSmall} />
          <img src='/icon.svg' className={styles.iconImage} alt='뜨개질 실과 바늘 아이콘' />
          <StarIcon className={styles.starRightSmall} />
          <StarIcon className={styles.starBottomRightLarge} />
        </div>
        <Button text='프로젝트 시작하기' type='cancel' className={styles.button} to='/folist' />
      </div>
    </div>
  );
};

export default Landing;
