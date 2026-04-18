import starIcon from '../../assets/star_icon.svg';

interface StarIconProps {
  className?: string;
}

const StarIcon = ({ className }: StarIconProps) => {
  return <img src={starIcon} className={className} alt='' aria-hidden='true' />;
};

export default StarIcon;
