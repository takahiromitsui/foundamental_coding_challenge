import styles from './Card.module.css';

type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => (
  <div className={styles.card}>{props.children}</div>
);
export default Card;