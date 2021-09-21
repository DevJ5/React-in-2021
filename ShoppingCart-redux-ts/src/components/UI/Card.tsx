import classes from './Card.module.css';

type CardProps = {
  className?: string;
  children: JSX.Element[];
};

const Card = (props: CardProps) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ''}`}>
      {props.children}
    </section>
  );
};

export default Card;
